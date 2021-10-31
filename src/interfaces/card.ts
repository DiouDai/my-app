//export type CardType = 'TeachingEasy'|'TeachingHard'|'Microaggression'

export interface Card{
    id:number
    kind:CardKind
    prompt:string
    answer:string
}

export enum CardKind{
    TeachingEasy= "Teaching Prompt Round 1",
    TeachingHard = "Teaching Prompt Round 2",
    Microaggressions= "Microaggresions Round"
}
