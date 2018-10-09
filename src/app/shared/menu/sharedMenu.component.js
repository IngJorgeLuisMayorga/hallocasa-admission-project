export function sharedMenuComponent() {
  var directive = {};

  directive.restrict = 'E'; /* restrict this directive to elements */

  directive.template = "My first directive: {{textToInsert}}";

  return directive;
}
