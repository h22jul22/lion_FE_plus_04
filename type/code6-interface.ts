{
    class Exam {
        constructor(public kor: number, public eng: number) {}
        total() {
            return this.kor + this.eng;
        }
    }
}

{
    interface Exam {
        kor: number;
        eng: number;
        total(): number;
    }
    class ExamImpl implements Exam {
        constructor(public kor: number, public eng: number) {}
        total() {
            return this.kor + this.eng;
        }
    }
}

{
    interface Name1 {
        kor: number;
        eng: number;
    }
    interface Name1 {
        total(): number;
    }

    // type Name2 {
    //     kor: number;
    //     eng: number;
    // }
    // type Name2 {
    //     total(): number;
    // }
}
