export default getListStudentIdsn (career) {
    if (!Array.isArray(career)) {
        return [];
    }

    const careerids = career.map((career) => career.id);
    return careerids;
}