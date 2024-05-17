type Mods = Record<string, boolean>;

export default function ClassNames(cls: string, mods: Mods, additional: string[]){

    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([className, value]) => value)
            .map(([className]) => className),
    ].join(' ');
}