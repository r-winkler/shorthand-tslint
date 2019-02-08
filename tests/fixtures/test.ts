///// positive /////

function test00(bar: string) {
    return bar ? bar : ''; // return bar || ''
}

function test01(bar: string) {
    return bar ? '' : bar; // no shorthand syntax
}

function test02(obj: any) {
    return obj.name ? obj.name : ''; // return obj.name || ''
}

function test03(obj: any) {
    return obj.name ? '' : obj.name; // no shorthand syntax
}

function test04(obj: any) {
    return obj.name.a ? obj.name.a : ''; // return obj.name.a || ''
}

function test05(obj: any) {
    return obj.name.a ?  '' : obj.name.a; // no shorthand syntax
}




///// negative /////

function test10(bar: string) {
    return !bar ? '' : bar; // return bar || ''
}

function test11(bar: string) {
    return !bar ? bar : ''; // no shorthand syntax
}

function test12(obj: any) {
    return !obj.name ? '' : obj.name; // return obj.name || ''
}

function test13(obj: any) {
    return !obj.name ? obj.name : ''; // no shorthand syntax
}

function test14(obj: any) {
    return !obj.name.a ? '' : obj.name.a; // return obj.name.a || ''
}

function test15(obj: any) {
    return !obj.name.a ? obj.name.a : ''; // no shorthand syntax
}



///// != null /////

function test20(bar: string) {
    return bar != null ? bar : ''; // return bar || ''
}

function test21(bar: string) {
    return bar != null ? '' : bar; // no shorthand syntax
}

function test22(obj: any) {
    return obj.name != null ? obj.name : ''; // return obj.name || ''
}

function test23(obj: any) {
    return obj.name != null ? '' : obj.name; // no shorthand syntax
}

function test24(obj: any) {
    return obj.name.a != null ? obj.name.a : ''; // return obj.name.a || ''
}

function test25(obj: any) {
    return obj.name.a != null ? '' : obj.name.a; // no shorthand syntax
}




///// == null /////

function test30(bar: string) {
    return bar == null ? '' : bar; // return bar || ''
}

function test31(bar: string) {
    return bar == null ? bar : ''; // no shorthand syntax
}

function test32(obj: any) {
    return obj.name == null ? '' : obj.name; // return obj.name || ''
}

function test33(obj: any) {
    return obj.name == null ? obj.name : ''; // no shorthand syntax
}

function test34(obj: any) {
    return obj.name.a == null ? '' : obj.name.a; // return obj.name.a || ''
}

function test35(obj: any) {
    return obj.name.a == null ? obj.name.a : ''; // no shorthand syntax
}



/// !== null /////

function test40(bar: string) {
    return bar !== null ? bar : ''; // return bar || ''
}

function test41(bar: string) {
    return bar !== null ? '' : bar; // no shorthand syntax
}

function test42(obj: any) {
    return obj.name !== null ? obj.name : ''; // return obj.name || ''
}

function test43(obj: any) {
    return obj.name !== null ? '' : obj.name; // no shorthand syntax
}

function test44(obj: any) {
    return obj.name.a !== null ? obj.name.a : ''; // return obj.name.a || ''
}

function test45(obj: any) {
    return obj.name.a !== null ? '' : obj.name.a; // no shorthand syntax
}


/// === null /////

function test50(bar: string) {
    return bar === null ? '' : bar; // return bar || ''
}

function test51(bar: string) {
    return bar === null ? bar : ''; // no shorthand syntax
}

function test52(obj: any) {
    return obj.name === null ? '' : obj.name; // return obj.name || ''
}

function test53(obj: any) {
    return obj.name === null ? obj.name : ''; // no shorthand syntax
}

function test54(obj: any) {
    return obj.name.a === null ? '' : obj.name.a; // return obj.name.a || ''
}

function test55(obj: any) {
    return obj.name.a === null ? obj.name.a : ''; // no shorthand syntax
}


///// special /////

function test90(bar: number) {
    return bar >= 0 ? bar : -1; // no shorthand syntax
}

function test91(obj: any) {
    return obj.name.a != null ? obj.name.b : ''; // no shorthand syntax
}
