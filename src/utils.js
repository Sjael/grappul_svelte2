
const non_cap_words = ['and', 'or', 'the', 'of'];


export var attr_flip = ["cooldown", "mana cost"];
export function unslug(slug){
    slug = slug.replaceAll('_', ' ');
    slug = slug.replaceAll('-', ' ');
    var text = slug
        .split(' ')
        .map(function(s) { 
            if (!non_cap_words.includes(s)){
                s = s.charAt(0).toUpperCase() + s.substring(1)
            }
            return s;
        })
        .join(' ');
    return text;
}

export function slug(text){
    text = text.replaceAll(' ', '_');
    var slug = text.toLowerCase();
    return slug;
}

export function simplify(text){
    text = text.replaceAll("'", '');
    let slug = text.toLowerCase();
    return slug;
}
