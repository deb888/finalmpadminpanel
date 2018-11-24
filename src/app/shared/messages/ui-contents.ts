export class UIContents {
    private _contents: any = {
        "TEACHER": {
            "en": {
                "registration_message": "Teacher is registered",
                "class_msg": "Class is registered"
            },
            "fr": {
                "registration_message": "Teacher is registered",
            },
            "es": {
                "registration_message": "Teacher is registered",
            }
        },
    }

    public get content(): any {
        return this._contents;
    }

    transform() {
        let lang = "en"; // local storage
        let input: string = "TEACHER.registration_message";
        let splited: string[] = input.split(".");
        let return_msg: string = this._contents[splited[0]][lang][splited[1]];
    }
}