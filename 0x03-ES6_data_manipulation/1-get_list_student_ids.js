export default getListStudentIdsn (Students) {
    if (!Array.isArray(Students)) {
        return [];
    }

    const Studentsids = Students.map((Students) => Students.id);
    return Studentsids;
}
