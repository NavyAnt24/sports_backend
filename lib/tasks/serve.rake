namespace 'serve' do
	task :dev do
		exec 'foreman start -f Procfile.dev'
	end

	desc 'Start prod server'
	task :prod do
		exec 'NPM_CONFIG_PRODUCTION=true npm run postinstall && foreman start'
	end
end

desc 'Start dev servers'
task serve: 'serve:dev'