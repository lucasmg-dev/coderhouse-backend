export function PersonaDTO(persona,id,fyh) {
    return {
        id,
        fyh,
        ...persona
    }
}
