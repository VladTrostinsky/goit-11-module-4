function makeToggler(){
    var toggle = false;
    var changeToggle = function(){
        debugger;
        toggle = !toggle;
        return toggle;
    };
    return changeToggle;
};
var toggling = makeToggler();
toggling();
toggling();
var checkButton = function(button){
    if(button){
        document.writeln("Enable " + 1);
        return;
    } else {
        document.writeln("Disable " + 1);
    }
    console.log("test2");
}

checkButton(toggling());
(function(window){
    document.writeln("Anonim");
})(window);
checkButton(toggling());
 // ...