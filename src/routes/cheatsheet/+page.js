export const load = async ({fetch}) => {
    const response = await fetch('/json/builds.json')
    const data = await response.json();

    return data
}