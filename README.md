<img title="" src=".github/assets/platypus-logo.png" alt="" width="194">

# Ornitorrinco

> Fácil de usar e implementar em seu projeto, seja Frontend ou Backend. Crie e use máscaras de forma simples.

## Motivação

Já me deparei muitas vezes necessitando utilizar **libs** para utilização de máscaras nos inputs dos meus projetos [React](https://pt-br.reactjs.org/), essas mesmas libs na maioria das vezes estão integradas no próprio input, toda vez que comecei um projeto novo e criei o design system do frontend me deparei com o momento em que tive que usar umas dessas libs para mascarar meus inputs e até mesmo alguns valores na tela, o mesmo serve para inputs com valor monetário, percebi que tinha que recriar meus componentes ou fazer uma função [replace](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace) enorme para cada máscara se quisesse utilizar meu componente original de input, algo assim:

```typescript
const applyCnpj = (value: string): string => {
  value = value.replace(/\D/g, "")
  value = value.replace(/^(\d{2})(\d{1})/, "$1.$2")
  value = value.replace(/^(\d{2}).(\d{3})(\d{1})/, "$1.$2.$3")
  value = value.replace(/^(\d{2}).(\d{3}).(\d{3})(\d{1})/, "$1.$2.$3/$4")
  value = value.replace(
    /^(\d{2}).(\d{3}).(\d{3})[/](\d{4})(\d)/,
    "$1.$2.$3/$4-$5"
  )

  return value
}
```

É difícil de ler, portanto difícil de dar manutenção e não é todo desenvolvedor que gosta de aprender [Expressões Regulares](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions), e para suprir a necessidade da nossa aplicação teríamos que ter várias funções parecidas com o mesmo nível de complexidade para aplicar nossas máscaras nos inputs, foi pensando nisso que eu tive a ideia de fazer o **Platypus** portanto pense no seguinte cenário:

1. Preciso colocar máscara em algum valor do meu projeto.

2. Não quero instalar uma lib que me faça refazer meu componente.

3. Não quero criar uma lista enorme de funções para aplicar as máscaras, elas são enormes e de difícil manutenção.

4. Preciso de máscaras dinâmicas que assumam formatos variados conforme o usuário digita.

5. Desejo fazer isso com pouco esforço.

## Uso

Exemplo com **React**

```typescript
import Platypus from 'platypus'

const Component = () => {
  const formatUserCode = (code: string): string => {
     return Platypus.applyMask(code, ['##.##-#'])
  }

  return (
    <h1>User Code: {44521}</h1> // User Code: 44.52-1
  )
}
```

|           | Type                                       | Example                                 | Result |
| --------- | ------------------------------------------ | --------------------------------------- | ------ |
| applyMask | (value: string, masks: string[]) => string | applyMask('platypus44521', ['##.##-#']) |        |
|           |                                            |                                         |        |
|           |                                            |                                         |        |
