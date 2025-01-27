import {
  type Connect,
  type Plugin,
  type PluginOption,
  createServerModuleRunner,
  defineConfig,
} from "vite";

export default defineConfig({
  clearScreen: false,
  appType: "custom",
  plugins: [vitePluginSsrMiddleware({ entry: "/src/entry-server" })],
  resolve: {
    noExternal: true,
  },
  environments: {
    ssr: {
      optimizeDeps: {
        noDiscovery: false,
        entries: ["/src/entry-server"],
      },
    },
  },
});

// vavite-style ssr middleware plugin
function vitePluginSsrMiddleware({ entry }: { entry: string }): PluginOption[] {
  const plugin: Plugin = {
    name: vitePluginSsrMiddleware.name,

    configureServer(server) {
      const runner = createServerModuleRunner(server.environments.ssr, {
        hmr: { logger: false },
      });
      const handler: Connect.NextHandleFunction = async (req, res, next) => {
        try {
          const mod = await runner.import(entry);
          await mod["default"](req, res, next);
        } catch (e) {
          next(e);
        }
      };
      return () => server.middlewares.use(handler);
    },
  };
  return [plugin];
}
