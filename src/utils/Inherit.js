/**
 * Inheritance function
 *
 * @param subClass
 * @param baseClass
 */
function inherit(subClass, baseClass) {

  function clazz() {
  }

  clazz.prototype = baseClass.prototype;
  subClass.prototype = new clazz();

  subClass.prototype.constructor = subClass;
  subClass.superConstructor = baseClass;
  subClass.superClass = baseClass.prototype;

}

/**
 * End of inheritance function
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

module.exports = inherit;