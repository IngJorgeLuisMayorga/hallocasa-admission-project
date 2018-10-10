export function sharedFooterComponent() {
  var directive = {};

  directive.restrict = 'E'; /* restrict this directive to elements */

  directive.template = "My first directive: {{textToInsert}}";

  return directive;
}
