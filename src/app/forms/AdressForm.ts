import { FormControl, FormGroup, Validators } from "@angular/forms";

export const adressForm=({
    country : new FormControl (null,[Validators.required,Validators.minLength(3),Validators.maxLength(30),
                                Validators.pattern("[A-Za-z]*[a-z]+")]),
    city :new FormControl (null,[Validators.required,Validators.minLength(3),Validators.maxLength(30),
                                Validators.pattern("[A-Za-z]*[a-z]+")]),
    zipCode : new FormControl (null,[Validators.required,Validators.minLength(4),Validators.pattern("[0-9]+")]),
    street : new FormControl (null,[Validators.required,Validators.minLength(3),Validators.maxLength(30),
        Validators.pattern("[A-Za-z]*[a-z ]+")]),
    houseNumber : new FormControl (null,[Validators.required,Validators.pattern("([0-9]{1,3})+([abcdefABCDEF]{0,1})")])
})