"use strict";

exports.__esModule = true;
exports.useChildren = useChildren;
exports.useParent = useParent;
function useParent(name, onEffect) {
  const path = `../${name}/index`;
  return {
    [path]: {
      type: 'ancestor',
      linked() {
        if (onEffect) {
          onEffect.call(this);
        }
      },
      linkChanged() {
        if (onEffect) {
          onEffect.call(this);
        }
      },
      unlinked() {
        if (onEffect) {
          onEffect.call(this);
        }
      }
    }
  };
}
function useChildren(name, onEffect) {
  const path = `../${name}/index`;
  return {
    [path]: {
      type: 'descendant',
      linked(target) {
        if (onEffect) {
          onEffect.call(this, target);
        }
      },
      linkChanged(target) {
        if (onEffect) {
          onEffect.call(this, target);
        }
      },
      unlinked(target) {
        if (onEffect) {
          onEffect.call(this, target);
        }
      }
    }
  };
}