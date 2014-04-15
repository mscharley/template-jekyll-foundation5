
def bundle_exec(*args)
  sh 'bundle', 'exec', *args
end

def exec_bundle_exec(*args)
  exec 'bundle', 'exec', *args
end

task :watch do
  exec_bundle_exec 'jekyll', 'serve', '-w'
end

task :install do
  sh 'bundle', 'install'
  sh 'bower', 'install'
end
