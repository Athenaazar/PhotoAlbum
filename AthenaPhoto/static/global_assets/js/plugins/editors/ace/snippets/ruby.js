define("ace/snippets/ruby",["require","exports","module"],function(e,t,n){"use strict";t.snippetText='########################################\n# Ruby snippets - for Rails, see below #\n########################################\n\n# encoding for Ruby 1.9\nsnippet enc\n	# encoding: utf-8\n\n# #!/usr/bin/env ruby\nsnippet #!\n	#!/usr/bin/env ruby\n	# encoding: utf-8\n\n# New Block\nsnippet =b\n	=begin rdoc\n		${1}\n	=end\nsnippet y\n	:yields: ${1:arguments}\nsnippet rb\n	#!/usr/bin/env ruby -wKU\nsnippet beg\n	begin\n		${3}\n	rescue ${1:Exception} => ${2:e}\n	end\n\nsnippet req require\n	require "${1}"${2}\nsnippet #\n	# =>\nsnippet end\n	__END__\nsnippet case\n	case ${1:object}\n	when ${2:condition}\n		${3}\n	end\nsnippet when\n	when ${1:condition}\n		${2}\nsnippet def\n	def ${1:method_name}\n		${2}\n	end\nsnippet deft\n	def test_${1:case_name}\n		${2}\n	end\nsnippet if\n	if ${1:condition}\n		${2}\n	end\nsnippet ife\n	if ${1:condition}\n		${2}\n	else\n		${3}\n	end\nsnippet elsif\n	elsif ${1:condition}\n		${2}\nsnippet unless\n	unless ${1:condition}\n		${2}\n	end\nsnippet while\n	while ${1:condition}\n		${2}\n	end\nsnippet for\n	for ${1:e} in ${2:c}\n		${3}\n	end\nsnippet until\n	until ${1:condition}\n		${2}\n	end\nsnippet cla class .. end\n	class ${1:`substitute(Filename(), \'\\(_\\|^\\)\\(.\\)\', \'\\u\\2\', \'g\')`}\n		${2}\n	end\nsnippet cla class .. initialize .. end\n	class ${1:`substitute(Filename(), \'\\(_\\|^\\)\\(.\\)\', \'\\u\\2\', \'g\')`}\n		def initialize(${2:args})\n			${3}\n		end\n	end\nsnippet cla class .. < ParentClass .. initialize .. end\n	class ${1:`substitute(Filename(), \'\\(_\\|^\\)\\(.\\)\', \'\\u\\2\', \'g\')`} < ${2:ParentClass}\n		def initialize(${3:args})\n			${4}\n		end\n	end\nsnippet cla ClassName = Struct .. do .. end\n	${1:`substitute(Filename(), \'\\(_\\|^\\)\\(.\\)\', \'\\u\\2\', \'g\')`} = Struct.new(:${2:attr_names}) do\n		def ${3:method_name}\n			${4}\n		end\n	end\nsnippet cla class BlankSlate .. initialize .. end\n	class ${1:BlankSlate}\n		instance_methods.each { |meth| undef_method(meth) unless meth =~ /\\A__/ }\n	end\nsnippet cla class << self .. end\n	class << ${1:self}\n		${2}\n	end\n# class .. < DelegateClass .. initialize .. end\nsnippet cla-\n	class ${1:`substitute(Filename(), \'\\(_\\|^\\)\\(.\\)\', \'\\u\\2\', \'g\')`} < DelegateClass(${2:ParentClass})\n		def initialize(${3:args})\n			super(${4:del_obj})\n\n			${5}\n		end\n	end\nsnippet mod module .. end\n	module ${1:`substitute(Filename(), \'\\(_\\|^\\)\\(.\\)\', \'\\u\\2\', \'g\')`}\n		${2}\n	end\nsnippet mod module .. module_function .. end\n	module ${1:`substitute(Filename(), \'\\(_\\|^\\)\\(.\\)\', \'\\u\\2\', \'g\')`}\n		module_function\n\n		${2}\n	end\nsnippet mod module .. ClassMethods .. end\n	module ${1:`substitute(Filename(), \'\\(_\\|^\\)\\(.\\)\', \'\\u\\2\', \'g\')`}\n		module ClassMethods\n			${2}\n		end\n\n		module InstanceMethods\n\n		end\n\n		def self.included(receiver)\n			receiver.extend         ClassMethods\n			receiver.send :include, InstanceMethods\n		end\n	end\n# attr_reader\nsnippet r\n	attr_reader :${1:attr_names}\n# attr_writer\nsnippet w\n	attr_writer :${1:attr_names}\n# attr_accessor\nsnippet rw\n	attr_accessor :${1:attr_names}\nsnippet atp\n	attr_protected :${1:attr_names}\nsnippet ata\n	attr_accessible :${1:attr_names}\n# include Enumerable\nsnippet Enum\n	include Enumerable\n\n	def each(&block)\n		${1}\n	end\n# include Comparable\nsnippet Comp\n	include Comparable\n\n	def <=>(other)\n		${1}\n	end\n# extend Forwardable\nsnippet Forw-\n	extend Forwardable\n# def self\nsnippet defs\n	def self.${1:class_method_name}\n		${2}\n	end\n# def method_missing\nsnippet defmm\n	def method_missing(meth, *args, &blk)\n		${1}\n	end\nsnippet defd\n	def_delegator :${1:@del_obj}, :${2:del_meth}, :${3:new_name}\nsnippet defds\n	def_delegators :${1:@del_obj}, :${2:del_methods}\nsnippet am\n	alias_method :${1:new_name}, :${2:old_name}\nsnippet app\n	if __FILE__ == $PROGRAM_NAME\n		${1}\n	end\n# usage_if()\nsnippet usai\n	if ARGV.${1}\n		abort "Usage: #{$PROGRAM_NAME} ${2:ARGS_GO_HERE}"${3}\n	end\n# usage_unless()\nsnippet usau\n	unless ARGV.${1}\n		abort "Usage: #{$PROGRAM_NAME} ${2:ARGS_GO_HERE}"${3}\n	end\nsnippet array\n	Array.new(${1:10}) { |${2:i}| ${3} }\nsnippet hash\n	Hash.new { |${1:hash}, ${2:key}| $1[$2] = ${3} }\nsnippet file File.foreach() { |line| .. }\n	File.foreach(${1:"path/to/file"}) { |${2:line}| ${3} }\nsnippet file File.read()\n	File.read(${1:"path/to/file"})${2}\nsnippet Dir Dir.global() { |file| .. }\n	Dir.glob(${1:"dir/glob/*"}) { |${2:file}| ${3} }\nsnippet Dir Dir[".."]\n	Dir[${1:"glob/**/*.rb"}]${2}\nsnippet dir\n	Filename.dirname(__FILE__)\nsnippet deli\n	delete_if { |${1:e}| ${2} }\nsnippet fil\n	fill(${1:range}) { |${2:i}| ${3} }\n# flatten_once()\nsnippet flao\n	inject(Array.new) { |${1:arr}, ${2:a}| $1.push(*$2)}${3}\nsnippet zip\n	zip(${1:enums}) { |${2:row}| ${3} }\n# downto(0) { |n| .. }\nsnippet dow\n	downto(${1:0}) { |${2:n}| ${3} }\nsnippet ste\n	step(${1:2}) { |${2:n}| ${3} }\nsnippet tim\n	times { |${1:n}| ${2} }\nsnippet upt\n	upto(${1:1.0/0.0}) { |${2:n}| ${3} }\nsnippet loo\n	loop { ${1} }\nsnippet ea\n	each { |${1:e}| ${2} }\nsnippet ead\n	each do |${1:e}|\n		${2}\n	end\nsnippet eab\n	each_byte { |${1:byte}| ${2} }\nsnippet eac- each_char { |chr| .. }\n	each_char { |${1:chr}| ${2} }\nsnippet eac- each_cons(..) { |group| .. }\n	each_cons(${1:2}) { |${2:group}| ${3} }\nsnippet eai\n	each_index { |${1:i}| ${2} }\nsnippet eaid\n	each_index do |${1:i}|\n		${2}\n	end\nsnippet eak\n	each_key { |${1:key}| ${2} }\nsnippet eakd\n	each_key do |${1:key}|\n		${2}\n	end\nsnippet eal\n	each_line { |${1:line}| ${2} }\nsnippet eald\n	each_line do |${1:line}|\n		${2}\n	end\nsnippet eap\n	each_pair { |${1:name}, ${2:val}| ${3} }\nsnippet eapd\n	each_pair do |${1:name}, ${2:val}|\n		${3}\n	end\nsnippet eas-\n	each_slice(${1:2}) { |${2:group}| ${3} }\nsnippet easd-\n	each_slice(${1:2}) do |${2:group}|\n		${3}\n	end\nsnippet eav\n	each_value { |${1:val}| ${2} }\nsnippet eavd\n	each_value do |${1:val}|\n		${2}\n	end\nsnippet eawi\n	each_with_index { |${1:e}, ${2:i}| ${3} }\nsnippet eawid\n	each_with_index do |${1:e},${2:i}|\n		${3}\n	end\nsnippet reve\n	reverse_each { |${1:e}| ${2} }\nsnippet reved\n	reverse_each do |${1:e}|\n		${2}\n	end\nsnippet inj\n	inject(${1:init}) { |${2:mem}, ${3:var}| ${4} }\nsnippet injd\n	inject(${1:init}) do |${2:mem}, ${3:var}|\n		${4}\n	end\nsnippet map\n	map { |${1:e}| ${2} }\nsnippet mapd\n	map do |${1:e}|\n		${2}\n	end\nsnippet mapwi-\n	enum_with_index.map { |${1:e}, ${2:i}| ${3} }\nsnippet sor\n	sort { |a, b| ${1} }\nsnippet sorb\n	sort_by { |${1:e}| ${2} }\nsnippet ran\n	sort_by { rand }\nsnippet all\n	all? { |${1:e}| ${2} }\nsnippet any\n	any? { |${1:e}| ${2} }\nsnippet cl\n	classify { |${1:e}| ${2} }\nsnippet col\n	collect { |${1:e}| ${2} }\nsnippet cold\n	collect do |${1:e}|\n		${2}\n	end\nsnippet det\n	detect { |${1:e}| ${2} }\nsnippet detd\n	detect do |${1:e}|\n		${2}\n	end\nsnippet fet\n	fetch(${1:name}) { |${2:key}| ${3} }\nsnippet fin\n	find { |${1:e}| ${2} }\nsnippet find\n	find do |${1:e}|\n		${2}\n	end\nsnippet fina\n	find_all { |${1:e}| ${2} }\nsnippet finad\n	find_all do |${1:e}|\n		${2}\n	end\nsnippet gre\n	grep(${1:/pattern/}) { |${2:match}| ${3} }\nsnippet sub\n	${1:g}sub(${2:/pattern/}) { |${3:match}| ${4} }\nsnippet sca\n	scan(${1:/pattern/}) { |${2:match}| ${3} }\nsnippet scad\n	scan(${1:/pattern/}) do |${2:match}|\n		${3}\n	end\nsnippet max\n	max { |a, b| ${1} }\nsnippet min\n	min { |a, b| ${1} }\nsnippet par\n	partition { |${1:e}| ${2} }\nsnippet pard\n	partition do |${1:e}|\n		${2}\n	end\nsnippet rej\n	reject { |${1:e}| ${2} }\nsnippet rejd\n	reject do |${1:e}|\n		${2}\n	end\nsnippet sel\n	select { |${1:e}| ${2} }\nsnippet seld\n	select do |${1:e}|\n		${2}\n	end\nsnippet lam\n	lambda { |${1:args}| ${2} }\nsnippet doo\n	do\n		${1}\n	end\nsnippet dov\n	do |${1:variable}|\n		${2}\n	end\nsnippet :\n	:${1:key} => ${2:"value"}${3}\nsnippet ope\n	open(${1:"path/or/url/or/pipe"}, "${2:w}") { |${3:io}| ${4} }\n# path_from_here()\nsnippet fpath\n	File.join(File.dirname(__FILE__), *%2[${1:rel path here}])${2}\n# unix_filter {}\nsnippet unif\n	ARGF.each_line${1} do |${2:line}|\n		${3}\n	end\n# option_parse {}\nsnippet optp\n	require "optparse"\n\n	options = {${1:default => "args"}}\n\n	ARGV.options do |opts|\n		opts.banner = "Usage: #{File.basename($PROGRAM_NAME)}\nsnippet opt\n	opts.on( "-${1:o}", "--${2:long-option-name}", ${3:String},\n	         "${4:Option description.}") do |${5:opt}|\n		${6}\n	end\nsnippet tc\n	require "test/unit"\n\n	require "${1:library_file_name}"\n\n	class Test${2:$1} < Test::Unit::TestCase\n		def test_${3:case_name}\n			${4}\n		end\n	end\nsnippet ts\n	require "test/unit"\n\n	require "tc_${1:test_case_file}"\n	require "tc_${2:test_case_file}"${3}\nsnippet as\n	assert ${1:test}, "${2:Failure message.}"${3}\nsnippet ase\n	assert_equal ${1:expected}, ${2:actual}${3}\nsnippet asne\n	assert_not_equal ${1:unexpected}, ${2:actual}${3}\nsnippet asid\n	assert_in_delta ${1:expected_float}, ${2:actual_float}, ${3:2 ** -20}${4}\nsnippet asio\n	assert_instance_of ${1:ExpectedClass}, ${2:actual_instance}${3}\nsnippet asko\n	assert_kind_of ${1:ExpectedKind}, ${2:actual_instance}${3}\nsnippet asn\n	assert_nil ${1:instance}${2}\nsnippet asnn\n	assert_not_nil ${1:instance}${2}\nsnippet asm\n	assert_match /${1:expected_pattern}/, ${2:actual_string}${3}\nsnippet asnm\n	assert_no_match /${1:unexpected_pattern}/, ${2:actual_string}${3}\nsnippet aso\n	assert_operator ${1:left}, :${2:operator}, ${3:right}${4}\nsnippet asr\n	assert_raise ${1:Exception} { ${2} }\nsnippet asrd\n	assert_raise ${1:Exception} do\n		${2}\n	end\nsnippet asnr\n	assert_nothing_raised ${1:Exception} { ${2} }\nsnippet asnrd\n	assert_nothing_raised ${1:Exception} do\n		${2}\n	end\nsnippet asrt\n	assert_respond_to ${1:object}, :${2:method}${3}\nsnippet ass assert_same(..)\n	assert_same ${1:expected}, ${2:actual}${3}\nsnippet ass assert_send(..)\n	assert_send [${1:object}, :${2:message}, ${3:args}]${4}\nsnippet asns\n	assert_not_same ${1:unexpected}, ${2:actual}${3}\nsnippet ast\n	assert_throws :${1:expected} { ${2} }\nsnippet astd\n	assert_throws :${1:expected} do\n		${2}\n	end\nsnippet asnt\n	assert_nothing_thrown { ${1} }\nsnippet asntd\n	assert_nothing_thrown do\n		${1}\n	end\nsnippet fl\n	flunk "${1:Failure message.}"${2}\n# Benchmark.bmbm do .. end\nsnippet bm-\n	TESTS = ${1:10_000}\n	Benchmark.bmbm do |results|\n		${2}\n	end\nsnippet rep\n	results.report("${1:name}:") { TESTS.times { ${2} }}\n# Marshal.dump(.., file)\nsnippet Md\n	File.open(${1:"path/to/file.dump"}, "wb") { |${2:file}| Marshal.dump(${3:obj}, $2) }${4}\n# Mashal.load(obj)\nsnippet Ml\n	File.open(${1:"path/to/file.dump"}, "rb") { |${2:file}| Marshal.load($2) }${3}\n# deep_copy(..)\nsnippet deec\n	Marshal.load(Marshal.dump(${1:obj_to_copy}))${2}\nsnippet Pn-\n	PStore.new(${1:"file_name.pstore"})${2}\nsnippet tra\n	transaction(${1:true}) { ${2} }\n# xmlread(..)\nsnippet xml-\n	REXML::Document.new(File.read(${1:"path/to/file"}))${2}\n# xpath(..) { .. }\nsnippet xpa\n	elements.each(${1:"//Xpath"}) do |${2:node}|\n		${3}\n	end\n# class_from_name()\nsnippet clafn\n	split("::").inject(Object) { |par, const| par.const_get(const) }\n# singleton_class()\nsnippet sinc\n	class << self; self end\nsnippet nam\n	namespace :${1:`Filename()`} do\n		${2}\n	end\nsnippet tas\n	desc "${1:Task description}"\n	task :${2:task_name => [:dependent, :tasks]} do\n		${3}\n	end\n# block\nsnippet b\n	{ |${1:var}| ${2} }\nsnippet begin\n	begin\n		raise \'A test exception.\'\n	rescue Exception => e\n		puts e.message\n		puts e.backtrace.inspect\n	else\n		# other exception\n	ensure\n		# always executed\n	end\n\n#debugging\nsnippet debug\n	require \'ruby-debug\'; debugger; true;\nsnippet pry\n	require \'pry\'; binding.pry\n\n#############################################\n# Rails snippets - for pure Ruby, see above #\n#############################################\nsnippet art\n	assert_redirected_to ${1::action => "${2:index}"}\nsnippet artnp\n	assert_redirected_to ${1:parent}_${2:child}_path(${3:@$1}, ${4:@$2})\nsnippet artnpp\n	assert_redirected_to ${1:parent}_${2:child}_path(${3:@$1})\nsnippet artp\n	assert_redirected_to ${1:model}_path(${2:@$1})\nsnippet artpp\n	assert_redirected_to ${1:model}s_path\nsnippet asd\n	assert_difference "${1:Model}.${2:count}", $1 do\n		${3}\n	end\nsnippet asnd\n	assert_no_difference "${1:Model}.${2:count}" do\n		${3}\n	end\nsnippet asre\n	assert_response :${1:success}, @response.body${2}\nsnippet asrj\n	assert_rjs :${1:replace}, "${2:dom id}"\nsnippet ass assert_select(..)\n	assert_select \'${1:path}\', :${2:text} => \'${3:inner_html\' ${4:do}\nsnippet bf\n	before_filter :${1:method}\nsnippet bt\n	belongs_to :${1:association}\nsnippet crw\n	cattr_accessor :${1:attr_names}\nsnippet defcreate\n	def create\n		@${1:model_class_name} = ${2:ModelClassName}.new(params[:$1])\n\n		respond_to do |wants|\n			if @$1.save\n				flash[:notice] = \'$2 was successfully created.\'\n				wants.html { redirect_to(@$1) }\n				wants.xml  { render :xml => @$1, :status => :created, :location => @$1 }\n			else\n				wants.html { render :action => "new" }\n				wants.xml  { render :xml => @$1.errors, :status => :unprocessable_entity }\n			end\n		end\n	end${3}\nsnippet defdestroy\n	def destroy\n		@${1:model_class_name} = ${2:ModelClassName}.find(params[:id])\n		@$1.destroy\n\n		respond_to do |wants|\n			wants.html { redirect_to($1s_url) }\n			wants.xml  { head :ok }\n		end\n	end${3}\nsnippet defedit\n	def edit\n		@${1:model_class_name} = ${2:ModelClassName}.find(params[:id])\n	end\nsnippet defindex\n	def index\n		@${1:model_class_name} = ${2:ModelClassName}.all\n\n		respond_to do |wants|\n			wants.html # login.html.erb\n			wants.xml  { render :xml => @$1s }\n		end\n	end${3}\nsnippet defnew\n	def new\n		@${1:model_class_name} = ${2:ModelClassName}.new\n\n		respond_to do |wants|\n			wants.html # new.html.erb\n			wants.xml  { render :xml => @$1 }\n		end\n	end${3}\nsnippet defshow\n	def show\n		@${1:model_class_name} = ${2:ModelClassName}.find(params[:id])\n\n		respond_to do |wants|\n			wants.html # show.html.erb\n			wants.xml  { render :xml => @$1 }\n		end\n	end${3}\nsnippet defupdate\n	def update\n		@${1:model_class_name} = ${2:ModelClassName}.find(params[:id])\n\n		respond_to do |wants|\n			if @$1.update_attributes(params[:$1])\n				flash[:notice] = \'$2 was successfully updated.\'\n				wants.html { redirect_to(@$1) }\n				wants.xml  { head :ok }\n			else\n				wants.html { render :action => "edit" }\n				wants.xml  { render :xml => @$1.errors, :status => :unprocessable_entity }\n			end\n		end\n	end${3}\nsnippet flash\n	flash[:${1:notice}] = "${2}"\nsnippet habtm\n	has_and_belongs_to_many :${1:object}, :join_table => "${2:table_name}", :foreign_key => "${3}_id"${4}\nsnippet hm\n	has_many :${1:object}\nsnippet hmd\n	has_many :${1:other}s, :class_name => "${2:$1}", :foreign_key => "${3:$1}_id", :dependent => :destroy${4}\nsnippet hmt\n	has_many :${1:object}, :through => :${2:object}\nsnippet ho\n	has_one :${1:object}\nsnippet i18\n	I18n.t(\'${1:type.key}\')${2}\nsnippet ist\n	<%= image_submit_tag("${1:agree.png}", :id => "${2:id}"${3} %>\nsnippet log\n	Rails.logger.${1:debug} ${2}\nsnippet log2\n	RAILS_DEFAULT_LOGGER.${1:debug} ${2}\nsnippet logd\n	logger.debug { "${1:message}" }${2}\nsnippet loge\n	logger.error { "${1:message}" }${2}\nsnippet logf\n	logger.fatal { "${1:message}" }${2}\nsnippet logi\n	logger.info { "${1:message}" }${2}\nsnippet logw\n	logger.warn { "${1:message}" }${2}\nsnippet mapc\n	${1:map}.${2:connect} \'${3:controller/:action/:id}\'\nsnippet mapca\n	${1:map}.catch_all "*${2:anything}", :controller => "${3:default}", :action => "${4:error}"${5}\nsnippet mapr\n	${1:map}.resource :${2:resource}\nsnippet maprs\n	${1:map}.resources :${2:resource}\nsnippet mapwo\n	${1:map}.with_options :${2:controller} => \'${3:thing}\' do |$3|\n		${4}\n	end\nsnippet mbs\n	before_save :${1:method}\nsnippet mcht\n	change_table :${1:table_name} do |t|\n		${2}\n	end\nsnippet mp\n	map(&:${1:id})\nsnippet mrw\n	mattr_accessor :${1:attr_names}\nsnippet oa\n	order("${1:field}")\nsnippet od\n	order("${1:field} DESC")\nsnippet pa\n	params[:${1:id}]${2}\nsnippet ra\n	render :action => "${1:action}"\nsnippet ral\n	render :action => "${1:action}", :layout => "${2:layoutname}"\nsnippet rest\n	respond_to do |wants|\n		wants.${1:html} { ${2} }\n	end\nsnippet rf\n	render :file => "${1:filepath}"\nsnippet rfu\n	render :file => "${1:filepath}", :use_full_path => ${2:false}\nsnippet ri\n	render :inline => "${1:<%= \'hello\' %>}"\nsnippet ril\n	render :inline => "${1:<%= \'hello\' %>}", :locals => { ${2::name} => "${3:value}"${4} }\nsnippet rit\n	render :inline => "${1:<%= \'hello\' %>}", :type => ${2::rxml}\nsnippet rjson\n	render :json => ${1:text to render}\nsnippet rl\n	render :layout => "${1:layoutname}"\nsnippet rn\n	render :nothing => ${1:true}\nsnippet rns\n	render :nothing => ${1:true}, :status => ${2:401}\nsnippet rp\n	render :partial => "${1:item}"\nsnippet rpc\n	render :partial => "${1:item}", :collection => ${2:@$1s}\nsnippet rpl\n	render :partial => "${1:item}", :locals => { :${2:$1} => ${3:@$1}\nsnippet rpo\n	render :partial => "${1:item}", :object => ${2:@$1}\nsnippet rps\n	render :partial => "${1:item}", :status => ${2:500}\nsnippet rt\n	render :text => "${1:text to render}"\nsnippet rtl\n	render :text => "${1:text to render}", :layout => "${2:layoutname}"\nsnippet rtlt\n	render :text => "${1:text to render}", :layout => ${2:true}\nsnippet rts\n	render :text => "${1:text to render}", :status => ${2:401}\nsnippet ru\n	render :update do |${1:page}|\n		$1.${2}\n	end\nsnippet rxml\n	render :xml => ${1:text to render}\nsnippet sc\n	scope :${1:name}, :where(:@${2:field} => ${3:value})\nsnippet sl\n	scope :${1:name}, lambda do |${2:value}|\n		where("${3:field = ?}", ${4:bind var})\n	end\nsnippet sha1\n	Digest::SHA1.hexdigest(${1:string})\nsnippet sweeper\n	class ${1:ModelClassName}Sweeper < ActionController::Caching::Sweeper\n		observe $1\n\n		def after_save(${2:model_class_name})\n			expire_cache($2)\n		end\n\n		def after_destroy($2)\n			expire_cache($2)\n		end\n\n		def expire_cache($2)\n			expire_page\n		end\n	end\nsnippet tcb\n	t.boolean :${1:title}\n	${2}\nsnippet tcbi\n	t.binary :${1:title}, :limit => ${2:2}.megabytes\n	${3}\nsnippet tcd\n	t.decimal :${1:title}, :precision => ${2:10}, :scale => ${3:2}\n	${4}\nsnippet tcda\n	t.date :${1:title}\n	${2}\nsnippet tcdt\n	t.datetime :${1:title}\n	${2}\nsnippet tcf\n	t.float :${1:title}\n	${2}\nsnippet tch\n	t.change :${1:name}, :${2:string}, :${3:limit} => ${4:80}\n	${5}\nsnippet tci\n	t.integer :${1:title}\n	${2}\nsnippet tcl\n	t.integer :lock_version, :null => false, :default => 0\n	${1}\nsnippet tcr\n	t.references :${1:taggable}, :polymorphic => { :default => \'${2:Photo}\' }\n	${3}\nsnippet tcs\n	t.string :${1:title}\n	${2}\nsnippet tct\n	t.text :${1:title}\n	${2}\nsnippet tcti\n	t.time :${1:title}\n	${2}\nsnippet tcts\n	t.timestamp :${1:title}\n	${2}\nsnippet tctss\n	t.timestamps\n	${1}\nsnippet va\n	validates_associated :${1:attribute}\nsnippet vao\n	validates_acceptance_of :${1:terms}\nsnippet vc\n	validates_confirmation_of :${1:attribute}\nsnippet ve\n	validates_exclusion_of :${1:attribute}, :in => ${2:%w( mov avi )}\nsnippet vf\n	validates_format_of :${1:attribute}, :with => /${2:regex}/\nsnippet vi\n	validates_inclusion_of :${1:attribute}, :in => %w(${2: mov avi })\nsnippet vl\n	validates_length_of :${1:attribute}, :within => ${2:3}..${3:20}\nsnippet vn\n	validates_numericality_of :${1:attribute}\nsnippet vpo\n	validates_presence_of :${1:attribute}\nsnippet vu\n	validates_uniqueness_of :${1:attribute}\nsnippet wants\n	wants.${1:js|xml|html} { ${2} }\nsnippet wc\n	where(${1:"conditions"}${2:, bind_var})\nsnippet wh\n	where(${1:field} => ${2:value})\nsnippet xdelete\n	xhr :delete, :${1:destroy}, :id => ${2:1}${3}\nsnippet xget\n	xhr :get, :${1:show}, :id => ${2:1}${3}\nsnippet xpost\n	xhr :post, :${1:create}, :${2:object} => { ${3} }\nsnippet xput\n	xhr :put, :${1:update}, :id => ${2:1}, :${3:object} => { ${4} }${5}\nsnippet test\n	test "should ${1:do something}" do\n		${2}\n	end\n#migrations\nsnippet mac\n	add_column :${1:table_name}, :${2:column_name}, :${3:data_type}\nsnippet mrc\n	remove_column :${1:table_name}, :${2:column_name}\nsnippet mrnc\n	rename_column :${1:table_name}, :${2:old_column_name}, :${3:new_column_name}\nsnippet mcc\n	change_column :${1:table}, :${2:column}, :${3:type}\nsnippet mccc\n	t.column :${1:title}, :${2:string}\nsnippet mct\n	create_table :${1:table_name} do |t|\n		t.column :${2:name}, :${3:type}\n	end\nsnippet migration\n	class ${1:class_name} < ActiveRecord::Migration\n		def self.up\n			${2}\n		end\n\n		def self.down\n		end\n	end\n\nsnippet trc\n	t.remove :${1:column}\nsnippet tre\n	t.rename :${1:old_column_name}, :${2:new_column_name}\n	${3}\nsnippet tref\n	t.references :${1:model}\n\n#rspec\nsnippet it\n	it "${1:spec_name}" do\n		${2}\n	end\nsnippet itp\n	it "${1:spec_name}"\n	${2}\nsnippet desc\n	describe ${1:class_name} do\n		${2}\n	end\nsnippet cont\n	context "${1:message}" do\n		${2}\n	end\nsnippet bef\n	before :${1:each} do\n		${2}\n	end\nsnippet aft\n	after :${1:each} do\n		${2}\n	end\n',t.scope="ruby"})