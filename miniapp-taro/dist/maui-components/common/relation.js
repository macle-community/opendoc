"use strict";

exports.__esModule = true;
exports.useChildren = useChildren;
exports.useParent = useParent;
function useParent(name, onEffect) {
  const path = `../${name}/index`;
  const tagName = `maui-${name}`;
  const def = {
    type: 'ancestor',
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
  };
  return {
    [path]: def,
    [tagName]: def
  };
}
function useChildren(name, onEffect) {
  const path = `../${name}/index`;
  const tagName = `maui-${name}`;
  const def = {
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
  };
  return {
    [path]: def,
    [tagName]: def
  };
}
