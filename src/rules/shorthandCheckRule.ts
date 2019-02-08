import * as ts from 'typescript'
import * as Lint from 'tslint'


export class Rule extends Lint.Rules.AbstractRule {

    public static FAILURE_STRING = "Expression must use shorthand syntax.";

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {

        return this.applyWithWalker(new ShorthandCheckWalker(sourceFile, this.getOptions()));
    }
}

const extractObj = obj => {
    const { kind, name, condition, expression, text, operator, operand, left, operatorToken, right, ...rest } = obj;

    const slimObj = {
        ...(kind && { kind: kind }),
        ...(name && { name: name }),
        ...(condition && { condition: condition }),
        ...(expression && { expression: expression }),
        ...(text && { text: text }),
        ...(operator && { operator: operator }),
        ...(operand && { operand: operand }),
        ...(left && { left: left }),
        ...(operatorToken && { operatorToken: operatorToken }),
        ...(right && { right: right })
    };

    return Object.keys(slimObj).reduce(
        (res, key) => {
            res[key] = (key == 'kind' || key == 'text' || key == 'operator') ? slimObj[key] : extractObj(slimObj[key]);
            return res;
        }, {})
};

class ShorthandCheckWalker extends Lint.RuleWalker {

    visitConditionalExpression(node: ts.ConditionalExpression) {

        let hasFailure;

        // bar ? bar : ''
        // bar.name ? bar.name : ''
        // bar.name.a ? bar.name.a : ''
        if(node.condition.kind == node.whenTrue.kind) {
            const objCondition = extractObj(node.condition);
            const whenTrueCondition = extractObj(node.whenTrue);
            hasFailure = JSON.stringify(objCondition) == JSON.stringify(whenTrueCondition);
        }
        // bar != null ? bar : ''
        // bar == null ? '' : bar
        else if(ts.isBinaryExpression(node.condition)) {

            const objCondition = extractObj(node.condition);
            const whenTrueCondition = extractObj(node.whenTrue);
            const whenFalseCondition = extractObj(node.whenFalse);
            // console.log(objCondition);
            // console.log(whenTrueCondition);
            // console.log(whenFalseCondition);
            hasFailure =
                JSON.stringify(objCondition['left']) == JSON.stringify(whenTrueCondition)
                && (objCondition['right']['kind'] === ts.SyntaxKind.NullKeyword || objCondition['right']['kind'] === ts.SyntaxKind.UndefinedKeyword)
                && (objCondition['operatorToken']['kind'] === ts.SyntaxKind.ExclamationEqualsToken || objCondition['operatorToken']['kind'] === ts.SyntaxKind.ExclamationEqualsEqualsToken)
                ||
                JSON.stringify(objCondition['left']) == JSON.stringify(whenFalseCondition)
                && (objCondition['right']['kind'] === ts.SyntaxKind.NullKeyword || objCondition['right']['kind'] === ts.SyntaxKind.UndefinedKeyword)
                && (objCondition['operatorToken']['kind'] === ts.SyntaxKind.EqualsEqualsToken || objCondition['operatorToken']['kind'] === ts.SyntaxKind.EqualsEqualsEqualsToken)
        }
        // !bar ? '' : bar
        else {
            const objCondition = extractObj(node.condition);
            const whenFalseCondition = extractObj(node.whenFalse);
            hasFailure = JSON.stringify(objCondition['operand']) == JSON.stringify(whenFalseCondition) && objCondition['operator'] === ts.SyntaxKind.ExclamationToken;
        }

        if(hasFailure) {
            this.addFailureAtNode(node, Rule.FAILURE_STRING);
        }

    }

}
