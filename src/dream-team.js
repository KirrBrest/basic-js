const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if ((typeof members) !== 'object' || members === null || !Array.isArray(members)) {return false} else {

    var arr = [];
    var allMembers = members.filter(function(el){return typeof(el) === "string"});
  
    //console.debug(allMembers);
  
    for (let i = 0; i < allMembers.length; i++) {
      let arrMember = [];
      let mem = allMembers[i].replace(/\s/g,'').split('');
      arr.push(mem[0].toUpperCase());
    
      
     
    }
    //console.debug(arr);
  
    return arr.sort().join('');
   }  

}

module.exports = {
  createDreamTeam
};
