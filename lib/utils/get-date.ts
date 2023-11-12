export function getYear(date: number | Date) {
    return new Date(date).getFullYear();
}

export function getHourMinute(date: number | Date) {
    const result = new Date(date);
    return [result.getHours(), result.getMinutes()];
}

export function getDay(date: number | Date) {
    return new Date(date).getDate();
}

export function getMonth(date: number | Date) {
    return new Date(date).getMonth();
}

export function getNameMount(date: number | Date, locale: undefined | string = "en"): string {
    function firstCharUpperCase(text: string): string {
        return text[0].toUpperCase() + text.slice(1);
    }

    const dateFormatter = new Intl.DateTimeFormat(locale, {
        month: "short"
    });
    return firstCharUpperCase(dateFormatter.format(date));
}