// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  apiPath: '/push-logic',
  production: true,
  pushServer: '',
  pushScirpt: '/push',
  pushOptionPath: '/push/socket.io/',
  copyRight: '上海xxx信息技术股份有限公司'
};
