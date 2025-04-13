# shadcn/ui

shadcn/ui is UI component library for React components. Shadcn/ui is modular in comparison to other component libraries. You only install the components you really need and not import anything. Further is the code stored directly in the project, instead coming from a dependencie.

Website shadcn/ui: https://ui.shadcn.com/

Next.js docs: https://ui.shadcn.com/docs/installation/next

Install shadcn/ui
```zsh
npx shadcn@latest init
```

Install a UI component
```zsh
npx shadcn@latest add <COMPONENT-NAME>
```

Usage in code
```tsx
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
```