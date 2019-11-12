import { useEffect, useState } from "react";

export default function useParseMeta(metastring: string): object {
    const [meta, setMeta] = useState({});
    useEffect(() => {
        if(metastring) {
            let appliedMeta = {};
            const properties = metastring.split(' ');
            properties.forEach(property => {
                const [key, value] = property.split('=');
                appliedMeta[key] = value;
            })
            setMeta(appliedMeta);
        }
    }, [metastring]);
    return meta;
}