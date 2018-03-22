let exportedMethods = {
    isPalindrome(str) {
        str = str.replace(/\s\s+/g, "")
                if (typeof str !== "string" || str == null || str == undefined || str.length == 0){
                    throw "Enter proper input";
                }

                else{
                    //trim
                     str = str.toLowerCase().replace(/ /g,"").replace(/\n/g,"").replace(/[^a-zA-Z0-9\ ]/g,"").replace(/\s\s+/g, "").trim(); 
                     //alert(str)
                     var last = str.length - 1;
                     for (let i = 0; i < str.length; i++){
                        if (str[i] != str[last])
                            return false;
                        last--;
                     }
                    return true;
                }

    }
}

module.exports = exportedMethods;