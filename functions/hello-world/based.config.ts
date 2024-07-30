import { BasedFunctionConfig } from '@based/functions'

const config: BasedFunctionConfig = {
  type: 'app',
  name: 'hello-world',
  public: true,
  main: './index.ts',
  path: '/',
}

export default config