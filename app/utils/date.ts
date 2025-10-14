export const formatDate = (dateString: string) => {
    if (!dateString) {
        return "";
    }

    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) {
        return dateString;
    }

    return date.toLocaleDateString("id-ID", { year: "numeric", month: "long" });
};
