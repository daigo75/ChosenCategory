<?php if (!defined("APPLICATION")) exit();

$PluginInfo["ChosenCategory"] = array(
   "Name" => "Chosen Category",
   "Description" => "Utilizes the Chosen plugin by <a href='http://www.getharvest.com/'>Harvest</a> for super sweet category selections.",
   "Version" => "1.0",
   "Author" => "Kasper K. Isager",
   "AuthorEmail" => "kasperisager@gmail.com",
   "AuthorUrl" => "http://github.com/kasperisager"
);

class ChosenPlugin extends Gdn_Plugin {

	public function PostController_Render_Before($Sender) {
		$Sender->AddCSSFile(__DIR__."/chosen.css");
		$Sender->AddJsFile(__DIR__."/jquery.chosen.js");
		$Sender->AddJsFile(__DIR__."/plugin.chosen.js");
	}
	public function Setup(){}

}