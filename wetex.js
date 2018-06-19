WeTeXConfig = {
    majors: {
        "texcode": "WeTeX_texcode",
        "texbtn": "WeTeX_texbtn",
        "mmlcode": "WeTeX_mmlcode",
        "undo-attribute": "data-WeTeX-cache",
        "focus_leaf": "WeTeX_leaf",
        "focusid": "WeTeX_m1"
    },
    keys: {
        "subscript": ["shift _", "", "_{\\Box}"],
        "superscript": ["shift ^", "", "^{\\Box}"],
        "tensor": ["ctrl -", "\\\\t\\[\\]", "_{\\Box}^{\\Box}"],
        "fraction": ["shift %", "\\(/\\)", "\\frac{\\Box}{\\Box}"],
        "squareroot": ["shift !", "\\\\sq\\[\\]", "\\sqrt{\\Box\\Box}"],
        "cuberoot": ["shift #", "\\\\q\\[\\]", "\\sqrt[3]{\\Box}"],
        "unicode": ["shift @", "\\\\x\\[\\]", "\\text{口}"],
        "differential": ["alt o", "\\\\d\\[\\]", "\\frac{\\mathrm{d}\\Box}{\\mathrm{d}\\Box}"],
        "partialdifferential": ["alt p", "\\\\p\\[\\]", "\\frac{\\partial\\Box}{\\partial \\Box}"],
        "intergration": ["alt i", "\\\\i\\[\\]", "\\int_{\\Box}^{\\Box}{\\Box}\\;\\mathrm{d}{\\Box}"],
        "summation": ["alt s", "\\\\s\\[\\]", "\\sum_{\\Box}^{\\Box}{\\Box}"],
        "parenthetical": ["ctrl (", "\\(\\(\\)\\)\\)", "\\left(\\Box\\right)"],
        "brackets": ["ctrl [", "\\[\\[\\]\\]\\]", "\\left[\\Box\\right]"],
        "braces": ["ctrl {", "\\{\\{\\)\\}\\)", "\\left\\{\\Box\\right\\}"],
        "infinity": ["ctrl 8", "", "\\infty "],
        "centerdot": ["ctrl .", "", "\\cdot "],
        "similar": ["shift ~", "", "\\sim "],
        "equivalent": ["ctrl =", "", "\\equiv "]
    },
    funcs: {
        "matrix": "ctrl m",
        "macros": "ctrl \\",
        "symbol": "ctrl /",
        "split": "shift enter"
    }
};
autoCompleteList = {
    greek_letters: [
              "Gamma", "Delta", "Theta", "Lambda", "Xi", "Pi", "Sigma", "Upsilon", "Phi", "Psi", "Omega", "varGamma", "varDelta", "varTheta", "varLambda", "varXi", "varPi", "varSigma", "varUpsilon", "varPhi", "varPsi", "varOmega", "alpha", "beta", "gamma", "delta", "epsilon", "zeta", "eta", "theta", "iota", "kappa", "lambda", "mu", "nu", "xi", "omicron", "pi", "rho", "sigma", "tau", "upsilon", "phi", "chi", "psi", "omega", "varepsilon", "varkappa", "vartheta", "varpi", "varrho", "varsigma", "varphi", "digamma"
          ],
    other_letters: [
              "imath", "jmath", "aleph", "beth", "gimel", "daleth", "eth", "Finv", "Game", "ell", "hbar", "hslash", "Im", "Re", "wp", "partial", "nabla", "Bbbk"
          ],
    logic_settheory: [
              "forall", "complement", "therefore", "neg", "lnot", "exists", "subset", "because", "emptyset", "varnothing", "nexists", "supset", "mapsto", "in", "mid", "to", "implies", "notin", "land", "gets", "impliedby", "ni", "lor", "leftrightarrow", "iff", "notn", "notni"
          ],
    big_operators: [
              "sum", "prod", "bigvee", "bigotimes", "int", "coprod", "bigwedge", "bigoplus", "iint", "intop", "bigcap", "bigodot", "iiint", "smallint", "bigcup", "biguplus", "oint", "bigsqcup"
          ],
    binary_operators: [
              "cdot", "gtrdot", "pmod", "pmod", "cdotp", "intercal", "pod", "pod", "centerdot", "land", "rhd", "circ", "leftthreetimes", "rightthreetimes", "amalg", "circledast", "ldotp", "rtimes", "And", "circledcirc", "lor", "setminus", "ast", "circleddash", "lessdot", "smallsetminus", "smallsetminus", "barwedge", "Cup", "lhd", "sqcap", "bigcirc", "cup", "ltimes", "sqcup", "bmod", "curlyvee", "mod", "times", "boxdot", "curlywedge", "mp", "unlhd", "boxminus", "div", "odot", "unrhd", "boxplus", "divideontimes", "ominus", "uplus", "boxtimes", "dotplus", "oplus", "vee", "bullet", "doublebarwedge", "otimes", "veebar", "Cap", "doublecap", "oslash", "wedge", "cap", "doublecup", "pm", "wr"
          ],
    relations: [
              "stackrel{!}{=}", "curlyeqsucc", "gtrapprox", "perp", "succapprox", "dashv", "gtreqless", "pitchfork", "succcurlyeq", "dblcolon", "gtreqqless", "prec", "succeq", "doteq", "gtrless", "precapprox", "succsim", "approx", "Doteq", "gtrsim", "preccurlyeq", "Supset", "approxeq", "doteqdot", "in", "preceq", "supset", "asymp", "eqcirc", "Join", "precsim", "supseteq", "backepsilon", "eqcolon", "le", "propto", "supseteqq", "backsim", "Eqcolon", "leq", "risingdotseq", "thickapprox", "backsimeq", "eqqcolon", "leqq", "shortmid", "thicksim", "between", "Eqqcolon", "leqslant", "shortparallel", "trianglelefteq", "bowtie", "eqsim", "lessapprox", "sim", "triangleq", "bumpeq", "eqslantgtr", "lesseqgtr", "simeq", "trianglerighteq", "Bumpeq", "eqslantless", "lesseqqgtr", "smallfrown", "varpropto", "circeq", "equiv", "lessgtr", "smallsmile", "vartriangle", "colonapprox", "fallingdotseq", "lesssim", "smile", "vartriangleleft", "Colonapprox", "frown", "ll", "sqsubset", "vartriangleright", "coloneq", "ge", "lll", "sqsubseteq", "vcentcolon", "Coloneq", "geq", "llless", "sqsupset", "vdash", "coloneqq", "geqq", "lt", "sqsupseteq", "vDash", "Coloneqq", "geqslant", "mid", "Subset", "Vdash", "colonsim", "gg", "models", "subset", "Vvdash", "Colonsim", "ggg", "multimap", "subseteq", "cong", "gggtr", "owns", "subseteqq", "curlyeqprec", "gt", "parallel", "succ"
          ],
    negated_relations: [
              "not =", "gnapprox", "ngeqslant", "nsubseteq", "precneqq", "gneq", "ngtr", "nsubseteqq", "precnsim", "gneqq", "nleq", "nsucc", "subsetneq", "gnsim", "nleqq", "nsucceq", "subsetneqq", "gvertneqq", "nleqslant", "nsupseteq", "succnapprox", "lnapprox", "nless", "nsupseteqq", "succneqq", "lneq", "nmid", "ntriangleleft", "succnsim", "lneqq", "notin", "ntrianglelefteq", "supsetneq", "lnsim", "notni", "ntriangleright", "supsetneqq", "lvertneqq", "nparallel", "ntrianglerighteq", "varsubsetneq", "ncong", "nprec", "nvdash", "varsubsetneqq", "ne", "npreceq", "nvDash", "varsupsetneq", "neq", "nshortmid", "nVDash", "varsupsetneqq", "ngeq", "nshortparallel", "nVdash", "ngeqq", "nsim", "precnapprox"
          ],
    arrows: [
              "circlearrowleft", "Leftarrow", "looparrowright", "rightrightarrows", "circlearrowright", "leftarrowtail", "Lsh", "rightsquigarrow", "curvearrowleft", "leftharpoondown", "mapsto", "Rrightarrow", "curvearrowright", "leftharpoonup", "nearrow", "Rsh", "dashleftarrow", "leftleftarrows", "nleftarrow", "searrow", "dashrightarrow", "leftrightarrow", "nLeftarrow", "swarrow", "downarrow", "Leftrightarrow", "nleftrightarrow", "to", "Downarrow", "leftrightarrows", "nLeftrightarrow", "twoheadleftarrow", "downdownarrows", "leftrightharpoons", "nrightarrow", "twoheadrightarrow", "downharpoonleft", "leftrightsquigarrow", "nRightarrow", "uparrow", "downharpoonright", "Lleftarrow", "nwarrow", "Uparrow", "gets", "longleftarrow", "restriction", "updownarrow", "hookleftarrow", "Longleftarrow", "rightarrow", "Updownarrow", "hookrightarrow", "longleftrightarrow", "Rightarrow", "upharpoonleft", "iff", "Longleftrightarrow", "rightarrowtail", "upharpoonright", "impliedby", "longmapsto", "rightharpoondown", "upuparrows", "implies", "longrightarrow", "rightharpoonup", "leadsto", "Longrightarrow", "rightleftarrows", "leftarrow", "looparrowleft", "rightleftharpoons"
          ],
    symbols_punctuations: [
              "Box", "dots", "checkmark", "square", "cdots", "dag", "blacksquare", "ddots", "dagger", "triangle", "ldots", "textdagger", "triangledown", "vdots", "ddag", "textunderscore", "triangleleft", "mathellipsis", "ddagger", "triangleright", "textellipsis", "textdaggerdbl", "textendash", "bigtriangledown", "flat", "bigtriangleup", "natural", "textdollar", "textemdash", "blacktriangle", "sharp", "pounds", "blacktriangledown", "circledR", "textsterling", "textquoteleft", "blacktriangleleft", "circledS", "yen", "text{\\lq}", "blacktriangleright", "clubsuit", "surd", "textquoteright", "diamond", "diamondsuit", "degree", "text{\\rq}", "Diamond", "heartsuit", "diagdown", "textquotedblleft", "lozenge", "spadesuit", "diagup", "blacklozenge", "angle", "mho", "textquotedblright", "star", "measuredangle", "maltese", "colon", "bigstar", "sphericalangle", "text{\\P}", "backprime", "textbar", "top", "text{\\S}", "prime", "textbardbl", "bot", "nabla", "textless", "textbraceleft", "textbraceright", "infty", "textgreater"
          ]
}
var ac = autoCompleteList;
var ac_symbol = ac.other_letters.concat(ac.logic_settheory.concat(ac.big_operators.concat(ac.binary_operators)));

function getTextVal(s) {
    return s.replace(/<[^<>]+>/g, "");
}

function runQueryAll(m1, qs, doFunc) {
    tag = m1.querySelector(qs);
    while (tag) {
        doFunc(tag);
        tag = m1.querySelector(qs);
    }
}

function changeFence(nd, dfen) {
    var fen = prompt("Choose fence", dfen);
    if (fen != null) {
        if (/^(\{|\}|\(|\)|\[|\])$/.test(fen)) {
            if (fen == "{" || fen == "}") {
                fen = "\\" + fen;
            }
            el = document.createTextNode(fen);
            nd.append(el);
        }
    }
    setTimeout(reloadEditedKaTeX, 10);
}

function renderWeTeXMath(ktex, nd, dispMode) {
    var undoAtt = WeTeXConfig.majors["undo-attribute"];
    console.log("KTEX",ktex);
    console.log("ND",nd);
    console.log("DISPMODE",dispMode);
    try {
        katex.render(ktex, nd, {
            unicodeTextInMathMode: true,
            displayMode: dispMode,
            throwOnError: false,
            errorColor: "#ff0000"
        });
        addAttributeToNode(nd, undoAtt, ktex);
    } catch (err) {
        var att = nd.getAttribute(undoAtt);
        if (att != null && att != "") {
            ktex = att;
        } else {
            ktex = "\\Error!";
        }
        katex.render(ktex, nd, {
            unicodeTextInMathMode: true,
            displayMode: dispMode,
            throwOnError: false,
            errorColor: "#ff0000"
        });
    }
    addFocusEvent(nd);
}

function addFocusEvent(nd) {
    all = nd.querySelectorAll(".mord.mspace,.mord.mathit,.mrel,.mord.mtight,.mop");
    for (var j = 0; j < all.length; j++) {
        var allj = all[j];
        addAttributeToNode(allj, "onclick", "addFocus(this);");
    }
}

function renderAllWeTeXMath() {
    ms = document.querySelectorAll("[data-WeTeX='inline']");
    mds = document.querySelectorAll("[data-WeTeX='display']");
    for (var i = 0; i < ms.length; i++) {
        msi = ms[i];
        msi.style.backgroundColor = "red";
        msh = removeDollars(msi.innerHTML);
        renderWeTeXMath(msh, msi, false);
        addAttributeToNode(msi, "onclick", "showMath(this);");
    }
    for (var i = 0; i < mds.length; i++) {
        mdsi = mds[i];
        mdsi.style.backgroundColor = "green";
        mdsh = removeDollars(mdsi.innerHTML);
        renderWeTeXMath(mdsh, mdsi, true);
        addAttributeToNode(mdsi, "onclick", "showMath(this);");
    }
}

function makeEditableAllWeTeX(lstn) {
    ms = document.querySelectorAll("[data-WeTeX='inline']");
    mds = document.querySelectorAll("[data-WeTeX='display']");
    for (var i = 0; i < ms.length; i++) {
        makeEditable(ms[i]);
    }
    for (var i = 0; i < mds.length; i++) {
        makeEditable(mds[i]);
    }
    lstn.listen();
}

function makeNotEditableAllWeTeX(lstn) {
    ms = document.querySelectorAll("[data-WeTeX='inline']");
    mds = document.querySelectorAll("[data-WeTeX='display']");
    for (var i = 0; i < ms.length; i++) {
        ms[i].setAttribute("contenteditable", "false");
        ms[i].setAttribute("onmouseleave", "");
        ms[i].setAttribute("onclick", "");
    }
    for (var i = 0; i < mds.length; i++) {
        mds[i].setAttribute("contenteditable", "false");
        mds[i].setAttribute("onmouseleave", "");
        mds[i].setAttribute("onclick", "");
    }
    lstn.stop_listening();
}

function addAttributeToNode(nd, name, value) {
    var myatt = document.createAttribute(name);
/* bala_krishnan
    console.log("ND",nd);
    console.log("NAME",name);
    console.log("VALUE",value);
*/
    myatt.value = value;
    nd.setAttributeNode(myatt);
}

function addFocus(e) {
    flid = WeTeXConfig.majors["focus_leaf"];
    fl = document.getElementById(flid);
    if (fl != null) {
        fl.removeAttribute("id");
    }
    addAttributeToNode(e, "id", flid);
}

function baseNode(m1) {
    return m1.querySelector(".katex-html");
}

function makeEditable(m1) {
    addAttributeToNode(baseNode(m1), "contenteditable", "true");
    var mt = m1.querySelectorAll(":empty,.mopen,.mclose");
    L = mt.length;
    for (var i = 0; i < L; i++) {
        addAttributeToNode(mt[i], "contenteditable", "false");
    }
    var mtOpen = m1.querySelectorAll(".mopen");
    L = mtOpen.length;
    for (var i = 0; i < L; i++) {
        addAttributeToNode(mtOpen[i], "onclick", "changeFence(this,'[');");
    }
    var mtClose = m1.querySelectorAll(".mclose");
    L = mtClose.length;
    for (var i = 0; i < L; i++) {
        addAttributeToNode(mtClose[i], "onclick", "changeFence(this,']');");
    }
    var msp = m1.querySelectorAll(".mspace");
    L = msp.length;
    for (var i = 0; i < L; i++) {
        addAttributeToNode(msp[i], "contenteditable", "true");
    }
    addAttributeToNode(m1, "onclick", "showEditable(this);");
    addAttributeToNode(m1, "onmouseleave", "reloadEditedKaTeX();");
}

function emptyFoo(item) {
    item.outerHTML = item.innerHTML;
}

function removeTag(item) {
    item.outerHTML = "";
}

function removeDollars(s) {
    s = s.replace(/^[$]*/g, "");
    s = s.replace(/[$]*$/g, "");
    s = s.replace(/&amp;/g, " & ");
    s = s.replace(/&amp;amp;/g, " \& ");
    s = s.replace(/&nbsp;/g, "\\,");
    return s;
}

function parseHtmlForTeX(s) {
    s = removeRedundantParenth(s);
    s = parseHtmlTagsAndEntities(s);
    s = parseRightLeftFenceConstructs(s);
    s = createMacroConstructs(s);
    s = renormalizeNbspInText(s);
    return s;
}

function removeRedundantParenth(s) {
    s = s.replace(/\{\}/g, "");
    s = s.replace(/\{\{([^\}\{]+)\}\}/g, "{$1}");
    /*
        s = s.replace(/\{\{([^\}\{]+)\}\}/g, "{$1}");
        s = s.replace(/([+=\-_^]|^|\{|\}|\(|\)|\[|\])\{([^\}\{]+)\}([+=\-_^]|$|\{|\}|\(|\)|\[|\])/g, "$1$2$3");
        s = s.replace(/([+=\-_^]|^|\{|\}|\(|\)|\[|\])\{([^\}\{]+)\}([+=\-_^]|$|\{|\}|\(|\)|\[|\])/g, "$1$2$3");
    */
    s = s.replace(/\{(\+|=|\-|\\pm|\\sum|\\int|\/)\}/g, "$1");
    s = s.replace(/(\{[^\\\{\}]+)\{([^\\\{\}]+)\}/g, "$1$2");
    return s;
}

function parseHtmlTagsAndEntities(s) {
    s = s.replace(/<[^<>]+>/g, "");
//    s = s.replace(/&amp;amp;/g, " & ");
    s = s.replace(/&amp;/g, " & ");
//&amp;amp;
    s = s.replace(/&nbsp;/g, "\\,");
    return s;
}

function renormalizeNbspInText(s) {
    var rgxp = /(\\text\{[^\{\}]*)\\,/;
    var ts = s.match(rgxp);
    while (ts) {
        s = s.replace(rgxp, "$1\\ ");
        ts = s.match(rgxp);
    }
    return s;
}

function parseRightLeftFenceConstructs(s) {
    leftParen = "⎝⎜⎛";
    rightParen = "⎠⎟⎞";
    leftBrac = "⎣⎢⎡";
    rightBrac = "⎦⎥⎤";
    leftCub = "⎩⎪⎨⎪⎧";
    rightCub = "⎭⎪⎬⎪⎫";
    allParen = leftParen + rightParen + leftBrac + rightBrac + leftCub + rightCub + "\\[\\]\\{\\}\\(\\)";
    s = s.replace(/\\left\{/g, "\\left\\{");
    s = s.replace(/\\right\}/g, "\\right\\}");
    s = s.replace(/\\left⎝⎜*⎛/g, "\\left(");
    s = s.replace(/\\right⎠⎟*⎞/g, "\\right)");
    s = s.replace(/\\left⎣⎢*⎡/g, "\\left[");
    s = s.replace(/\\right⎦⎥*⎤/g, "\\right]");
    s = s.replace(/\\left⎩⎪*⎨⎪*⎧/g, "\\left\\{");
    s = s.replace(/\\right⎭⎪*⎬⎪*⎫/g, "\\right\\}");
    s = s.replace(/(\\right|\\left)(?:\\{|\\}|\(|\)|\[|\])(\\{|\\}|\(|\)|\[|\])/g, "$1$2");
    return s;
}

function createMacroConstructs(s) {
    s = createMatrixFromTeX("\\\\m\\{([0-9]+, *[0-9]+)\\}", s);
    s = replaceAbbrevWithMacros(s);
    return s;
}

function createMatrixFromTeX(rgx, tex) {
    var rgxp = new RegExp(rgx);
    var size = ""
    if (tex.match(rgxp)) {
        size = tex.match(rgxp)[1];
    }
    var ktex = ktexMatrix(size);
    return tex.replace(rgxp, ktex);
}

function replaceAbbrevWithMacros(s) {
    var expand = WeTeXConfig.keys;
    for (var key in expand) {
        if (expand.hasOwnProperty(key)) {
            var abr = expand[key][1];
            if (abr != "") {
                var rep = expand[key][2];
                var rgxp = new RegExp(abr, "g");
                s = s.replace(rgxp, rep);
            }
        }
    }
    return s;
}

function replaceWithTeX(s) {
    s = s.replace(/−/g, "-");
    s = s.replace(/±/g, "{\\pm}");
    s = s.replace(/∑/g, "{\\sum}");
    s = s.replace(/∫/g, "{\\int}");
    s = s.replace(/□/g, "{\\Box}");
    s = s.replace(/▶/g, "{\\blacktriangleright}");
    s = s.replace(/ϝ/g, "{\\digamma}");
    return s;
}

function replaceThinspaceWithTeX(item) {
    item.outerHTML = "\\," + item.innerHTML;
}

function replaceThickspaceWithTeX(item) {
    item.outerHTML = "\\;" + item.innerHTML;
}

function replaceMathrmWithTeX(item) {
    item.outerHTML = "\\mathrm{" + item.innerHTML + "}";
}

function replaceMathbfWithTeX(item) {
    item.outerHTML = "\\mathbf{" + item.innerHTML + "}";
}

function replaceMopWithTeX(item) {
    var text = getTextVal(item.innerHTML);
    var rgxp = /^[A-Za-z]+$/;
    if (rgxp.test(text)) {
        item.outerHTML = "\\" + item.innerHTML + " ";
    } else {
        item.outerHTML = item.innerHTML;
    }
}

function replaceMbinWithTeX(item) {
    item.outerHTML = replaceWithTeX(item.innerHTML);
}

function replaceWithNullLeft(item) {
    item.outerHTML = "\\left. ";
}

function replaceWithNullRight(item) {
    item.outerHTML = "\\right. ";
}

function scrapeFences(s) {
    var rgxp = new RegExp("^(.*)" + allParen + "(.*)$");
    return rgxp.match(s);
}

function replaceWithLeft(item) {
    item.outerHTML = "\\left" + item.innerHTML;
}

function replaceWithRight(item) {
    item.outerHTML = "\\right" + item.innerHTML;
}

function replaceTextWithTeX(item) {
    item.outerHTML = "\\text{" + item.innerHTML + "}";
}

function replaceWithParenth(item) {
    item.outerHTML = "{" + replaceWithTeX(item.innerHTML) + "}";
}

function replaceSqrtWithTeX(item) {
    var cls = "";
    cns = item.childNodes;
    L = cns.length;
    bh = ""
    for (var i = 1; i < L; i++) {
        bh = bh + cns[i].innerHTML;
    }
    cn0 = cns[0];
    cls = cn0.getAttribute("class");
    cn0h = cn0.innerHTML;
    if (cls.includes("root")) {
        item.outerHTML = "\\sqrt[" + cn0h + "]{" + bh + "}";
    } else {
        item.outerHTML = "\\sqrt{" + item.innerHTML + "}";
    }
}

function replaceMfracWithTeX(item) {
    c = item.childNodes;
    item.insertBefore(c[1], c[0]);
    item.outerHTML = "\\frac" + item.innerHTML;
}

function replaceMathAccentWithTeX(item) {
    var c = item.childNodes;
    var s = getTextVal(c[1].innerHTML);
    switch (s) {
        case "\^":
            item.outerHTML = "\\hat{" + c[0].innerHTML + "}";
            break;
        case "ˉ":
            item.outerHTML = "\\bar{" + c[0].innerHTML + "}";
            break;
        case "˙":
            item.outerHTML = "\\dot{" + c[0].innerHTML + "}";
            break;
        case "~":
            item.outerHTML = "\\tilde{" + c[0].innerHTML + "}";
            break;
        case "'":
            item.outerHTML = c[0].innerHTML + "\\^{\\prime}";
            break;
        case "ˊ":
            item.outerHTML = "\\acute{" + c[0].innerHTML + "}";
            break;
        case "ˋ":
            item.outerHTML = "\\grave{" + c[0].innerHTML + "}";
            break;
        case "˚":
            item.outerHTML = "\\mathring{" + c[0].innerHTML + "}";
            break;
        case "˘":
            item.outerHTML = "\\breve{" + c[0].innerHTML + "}";
            break;
        case "ˇ":
            item.outerHTML = "\\check{" + c[0].innerHTML + "}";
            break;
        case "¨":
            item.outerHTML = "\\ddot{" + c[0].innerHTML + "}";
            break;
        case "\'":
            item.outerHTML = "\\acute{" + c[0].innerHTML + "}";
            break;
        default:
            item.outerHTML = "\\unknownMathAccent{" + c[0].innerHTML + "}";
//	      item.outerHTML = c[0].innerHTML;
        break;
    }
}

function replaceTextAccentWithTeX(item) {
    var c = item.childNodes;
    var s = getTextVal(c[1].innerHTML);
    switch (s) {
        case "\ˆ":
            item.outerHTML = "\\^{" + c[0].innerHTML + "}";
            break;
        case "ˊ":
            item.outerHTML = "\\'{" + c[0].innerHTML + "}";
            break;
        case "ˋ":
            item.outerHTML = "\\`{" + c[0].innerHTML + "}";
            break;
        default:
            item.outerHTML = "\\unknownTextAccent{" + c[0].innerHTML + "}";
            break;
    }
}

function replaceMtableWithTeX(item) {
    //console.log(item.outerHTML); // bala_krishnan
    c = item.childNodes;
    L = c.length;
    chtm = "";
    var mtbl = [];
    for (var i = 0; i < L; i++) {
        col = c[i].childNodes;
        M = col.length;
        var mtbli = [];
        for (var j = 0; j < M; j++) {
            mtbli.push(col[j].innerHTML);
        }
        mtbl.push(mtbli);
    }
    mtblh = "";
    for (var j = 0; j < M; j++) {
        for (var i = 0; i < L; i++) {
            mtblh = mtblh + mtbl[i][j];
            if (i != L - 1) {
                mtblh = mtblh + "\&amp;";
            }
        }
        if (j != M - 1) {
            mtblh = mtblh + "\\\\ ";
        }
    }
    item.outerHTML = "\\begin{matrix}" + mtblh + "\\end{matrix}";
}

function replaceSubsupWithTeX(item) {
    c = item.childNodes;
    L = c.length;
    switch (L) {
        case 0:
            item.outerHTML = "Oops! Error! no elements in subsup!" + item.innerHTML;
            break;
        case 1:
            item.outerHTML = "_{" + c[0].innerHTML + "}";
            break;
        default:
            item.outerHTML = "_{" + c[0].innerHTML + "}" + "^{" + c[1].innerHTML + "}";
            break;
    }
}

function replaceMsupsubWithTeX(item) {
    if (!(item.childNodes[0].getAttribute("class").includes("vlist-t2"))) {
        item.outerHTML = "^" + item.innerHTML;
    } else {
        item.outerHTML = "<span class='subsup'>" + item.innerHTML + "</span>";
    }
}

function replaceWidehatWithTeX(item) {
    if ((item.childNodes[0].getElement("svg")))
        if ((item.childNodes[0].getAttribute("class").includes("widehat"))) {
            item.outerHTML = "\\widehat" + item.innerHTML;
        } else {
            item.outerHTML = "\\widehat{" + item.innerHTML + "}";
        }
}

function katexHtml2latex(m1) {
    runQueryAll(m1, ".strut,.pstrut,.vlist-s,svg,.katex-mathml", removeTag);
    runQueryAll(m1, ".mspace.thinspace", replaceThinspaceWithTeX);
    runQueryAll(m1, ".mspace.thickspace", replaceThickspaceWithTeX);
    runQueryAll(m1, ".mord.mathrm", replaceMathrmWithTeX);
    runQueryAll(m1, ".mord.mathbf", replaceMathbfWithTeX);
    runQueryAll(m1, ".msupsub,.op-limits", replaceMsupsubWithTeX);
    runQueryAll(m1, ".msupsub,.op-limits", replaceWidehatWithTeX);
    runQueryAll(m1, ".mbin,.op-symbol,.mrel", replaceMbinWithTeX);
    runQueryAll(m1, ".vlist,.vlist-r,.vlist-t,.stretchy,.frac-line,.mspace,.arraycolsep,[class='']", emptyFoo);
    runQueryAll(m1, ".mfrac", replaceMfracWithTeX);
    runQueryAll(m1, ".sqrt", replaceSqrtWithTeX);
    runQueryAll(m1, ".subsup", replaceSubsupWithTeX);
    runQueryAll(m1, ".minner>.mopen.nulldelimiter", replaceWithNullLeft);
    runQueryAll(m1, ".mopen>.delimsizing,.mopen.delimcenter", replaceWithLeft);
    runQueryAll(m1, ".minner>.mclose.nulldelimiter", replaceWithNullRight);
    runQueryAll(m1, ".mclose>.delimsizing,.mclose.delimcenter", replaceWithRight);
    runQueryAll(m1, ".mtable", replaceMtableWithTeX);
    runQueryAll(m1, ".text>.accent", replaceTextAccentWithTeX);
    runQueryAll(m1, ".accent", replaceMathAccentWithTeX);
    runQueryAll(m1, ".text", replaceTextWithTeX);
    runQueryAll(m1, ".mop", replaceMopWithTeX);
    runQueryAll(m1, ".mord>.mord:only-child", emptyFoo);
    runQueryAll(m1, ".mord", replaceWithParenth);
    runQueryAll(m1, "span", emptyFoo);
}

function showMath(th) {
    var m1 = th;
    var focusid = WeTeXConfig.majors["focusid"];
    var texid = WeTeXConfig.majors["texcode"];
    var mmlid = WeTeXConfig.majors["mmlcode"];
    var texbtnid = WeTeXConfig.majors["texbtn"];
    m1o = document.getElementById(focusid);
    if (m1o != null) {
        m1o.removeAttribute("id");
    }
    addAttributeToNode(m1, "id", focusid);
    t1 = document.getElementById(texid);
    mml1 = document.getElementById(mmlid);
    mml = m1.querySelector(".katex-mathml");
    mml1.innerHTML = mml.innerHTML;
    t1.value = mml.querySelector("annotation").innerHTML;
}

function showEditable(m1) {
    showMath(m1);
    addAttributeToNode(baseNode(m1), "contenteditable", "true");
    WeTeXListener.listen();
}

function reloadEditedKaTeX() {
    var focusid = WeTeXConfig.majors["focusid"];
    var focusid = WeTeXConfig.majors["focusid"];
    var texid = WeTeXConfig.majors["texcode"];
    var mmlid = WeTeXConfig.majors["mmlcode"];
    var texbtnid = WeTeXConfig.majors["texbtn"];
    m1 = document.getElementById(focusid);
    if (m1 != null) {
        katexHtml2latex(m1);
        t1 = document.getElementById(texid);
        mml1 = document.getElementById(mmlid);
        mh1 = parseHtmlForTeX(m1.innerHTML);
        t1.value = mh1;
        WeTeXDisplay = true;
        if (m1.getAttribute("data-WeTeX") == "inline") {
            WeTeXDisplay = false;
        }
        renderWeTeXMath(mh1, m1, WeTeXDisplay);
        mml1.innerHTML = m1.querySelector(".katex-mathml").innerHTML;
        var tag = setCursorPositionOnBox(m1);
        if (tag == null) {
            WeTeXListener.stop_listening();
        } else {
            WeTeXListener.listen();
        }
        //showEditable(m1);
    }
}

function loadKaTeX() {
    var focusid = WeTeXConfig.majors["focusid"];
    var texid = WeTeXConfig.majors["texcode"];
    var mmlid = WeTeXConfig.majors["mmlcode"];
    var texbtnid = WeTeXConfig.majors["texbtn"];
    m1 = document.getElementById(focusid);
    t1 = document.getElementById(texid);
    mml1 = document.getElementById(mmlid);
    th1 = t1.value;
    m1.innerHTML = "$$" + th1 + "$$";
    WeTeXDisplay = true;
    if (m1.getAttribute("data-WeTeX") == "inline") {
        WeTeXDisplay = false;
    }
    renderWeTeXMath(th1, m1, WeTeXDisplay);
    mml = m1.querySelector(".katex-mathml");
    mml1.innerHTML = mml.innerHTML;
}

function setCursorPositionOnBox(m1) {
    var tags = m1.querySelectorAll(".mord.amsrm,.mord.cjk_fallback");
    L = tags.length;
    tag = null;
    for (var i = 0; i < L; i++) {
        var tagi = tags[i].childNodes[0];
        if (tagi.nodeValue == "□" || tagi.nodeValue == "口") {
            tag = tagi;
            baseNode(m1).setAttribute("contenteditable", "false");
            var att1 = document.createAttribute("contenteditable");
            att1.value = "true";
            tags[i].setAttributeNode(att1);
        } else {
            baseNode(m1).setAttribute("contenteditable", "true");
        }
    }
    if (tag != null) {
        var range = document.createRange();
        var sel = window.getSelection();
        range.collapse(true);
        sel.removeAllRanges();
        range.setStart(tag, 0);
        range.setEnd(tag, 1);
        sel.addRange(range);
    }
    return tag;
}

function setWeTeXKeyEvents(lstn, keyconfig) {
    mackeys = WeTeXConfig.keys;
    for (var k in mackeys) {
        if (mackeys.hasOwnProperty(k)) {
            var key = mackeys[k][0];
            var rep = mackeys[k][2];
            bindKatexKeys(lstn, key, rep);
        }
    }
    funckeys = WeTeXConfig.funcs;
    for (var k in funckeys) {
        if (funckeys.hasOwnProperty(k)) {
            bindKatexFuncs(lstn, k, funckeys[k]);
        }
    }
}

function bindKatexFuncs(lstn, name, key) {
    lstn.sequence_combo(key, function () {
        switch (name) {
            case "matrix":
                var size = prompt("Matrix size", "2,3");
                var ktex = ktexMatrix(size);
                insertTextAtCursor(ktex);
                setTimeout(reloadEditedKaTeX, 10);
                break;
            case "macros":
                var ls = autoCompleteList.greek_letters;
                var text = getMacroAutoText(ls);
                insertTextAtCursor(text + " ");
                break;
            case "symbol":
                var text = getMacroAutoText(ac_symbol);
                insertTextAtCursor(text + " ");
                break;
            case "split":
                var ktex = "}{\\Box }{";
                insertTextAtCursor(ktex);
                setTimeout(reloadEditedKaTeX, 10);
                console.log("enter key pressed!");
                break;
            default:
                break;
        }
        return false;
    });
}

function ktexMatrix(sz) {
    if (sz && sz != "") {
        var szs = sz.split(",");
        var M = parseInt(szs[0]);
        var N = parseInt(szs[1]);
        var ktex = "\\begin{pmatrix}";
        for (var i = 0; i < M; i++) {
            for (var j = 0; j < N; j++) {
                ktex = ktex + "{\\Box}";
                if (j < N - 1) {
                    ktex = ktex + " & ";
                }
            }
            if (i < M - 1) {
                ktex = ktex + "\\\\ ";
            }
        }
        ktex = ktex + "\\end{pmatrix}";
    }
    return ktex;
}

function bindKatexKeys(lstn, key, value) {
    lstn.sequence_combo(key, function () {
        insertTextAtCursor(value);
        setTimeout(reloadEditedKaTeX, 10);
        return false;
    });
}

function getMacroAutoText(list) {
    var sel, range, html;
    var val = null;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt) {
            range = sel.getRangeAt(0)
            node = range.startContainer;
            pos = range.startOffset;
            text = node.nodeValue.substring(0, pos);
            if (text.includes("\\")) {
                sp = text.split("\\");
                val = sp[sp.length - 1];
            }
        }
    }
    return autoComplete(val, list);
}

function autoComplete(start, list) {
    rest = start;
    L = list.length;
    M = start.length;
    for (var i = L - 1; i > -1; i--) {
        if (list[i].substring(0, M) == start) {
            rest = list[i].substring(M);
        }
    }
    return rest;
}

function insertTextAtCursor(text) {
    var sel, range, html;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            range.insertNode(document.createTextNode(text));
        }
    } else if (document.selection && document.selection.createRange) {
        document.selection.createRange().text = text;
    }
}
