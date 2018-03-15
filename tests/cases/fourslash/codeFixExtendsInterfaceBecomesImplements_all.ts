/// <reference path='fourslash.ts' />

////interface I {}
////class C extends I {}
////class D extends I {}

verify.codeFixAll({
    fixId: "extendsInterfaceBecomesImplements",
    fixAllDescription: "Fix all like: Change 'extends' to 'implements'",
    newFileContent: `interface I {}
class C implements I {}
class D implements I {}`,
});
