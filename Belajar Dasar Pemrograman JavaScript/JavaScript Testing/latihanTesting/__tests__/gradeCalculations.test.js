// const {averageExams} = require('../gradeCalculations');
const {averageExams, isStudentPassExam} = require('../gradeCalculations');

// test('it should return exact average', () => {
//     const listValueExams = [80, 100, 100, 80];
//     expect(averageExams(listValueExams)).toEqual(90);
// });


// test('it should handle non-number', () => {
//     const listValueExams = [80, 'a', '100', 80];
//     expect(() => averageExams(listValueExams)).toThrow();
// });

// grouping (integrasi test)
describe('grade calculations', () => {
    test('it should return exact average', () => {
        const listValueOfExams = [80, 100, 100, 80];
        expect(averageExams(listValueOfExams)).toEqual(90);
    });

    // integrasi testing
    test('test should return exam passed status', () => {
        const listValueOfExams = [80, 100, 100, 80];
        expect(isStudentPassExam(listValueOfExams, 'Irwan')).toEqual(true);
    });
});