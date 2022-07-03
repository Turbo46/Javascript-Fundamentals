function EmailValidation(mail){
    if ( mail.includes("@") && mail.includes(".com")){
        console.log(`Email format is true`);
    }else {
        console.log(`Email format is false`);
    }
}
EmailValidation("gilbert&gmail.com");