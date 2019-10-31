




export const PRIMARY = "#bfba94"

export const DARK = "#232323"

export const WHITE = "#ffffff"


const englishConstant = {

    OUR_TEAM: "Our Team"




}

const thaiConstant = {
    OUR_TEAM: "ทีมของเรา"
}



export function getLocalizedConstant(key, locale){
    if(locale == "en") {
        return englishConstant.key;
    } else if (locale == "th"){
        return thaiConstant.key
    }
     else return key
}