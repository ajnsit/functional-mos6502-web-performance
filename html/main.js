var timeIt;

let measure = (label, act) => {
    let before = +new Date();
    let cnt = act();
    let after = +new Date();
    console.log(label + ": " + cnt + " cycles done in " + (after - before) + "ms");
};

import('./implementations/purescript/bundle.js').then(mod => {
    timeIt = () => {
        measure("PureScript", mod.run(fn => () => files[fn]));
    };
});