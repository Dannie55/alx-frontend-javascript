export default getListStudentIdsn (students) {
    if (!Array.isArray(students)) {
        return [];
    }

    const studentids = students.map((student) => Students.id);
    return Studentids;
}
