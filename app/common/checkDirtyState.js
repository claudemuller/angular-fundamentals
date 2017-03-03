"use strict";
function checkDirtyState(component) {
    if (component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?');
    return true;
}
exports.checkDirtyState = checkDirtyState;
//# sourceMappingURL=checkDirtyState.js.map