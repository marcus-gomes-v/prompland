export default function Price({ value }: { value: number }) {
    return <>{(value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))}</>
}
