/* 97. Factory pattern
======================================================= */
// Member Factory
function MemberFactory(){
    this.createMember = function(name, type){
        let member;

        if( type === 'standard' ){
            member = new DefaultMembership('Alberuni');
        }else if( type === 'elite' ){
            member = new EliteMembership('Azad');
        }else if( type === 'bronze' ){
            member = new BronzeMembership('Mahmudur');
        }
        
        member.type = type;
        member.define = function(){
            console.log(`${this.type} ${this.name}`);
        }

        return member;
    }
    this.name = 'Alberuni';
    this.type = 'default';
}



/*
/// Summary ///
- Factory methods are often used in applications to manage and maintain, manipulate collections of objects that are different but at the same time have many common characteristics. A good example is a member of membership website

// From Sumit:
*/