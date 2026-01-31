<?php
declare(strict_types=1)
//phpcs:disable VariableAnalysis
// There are "undefined" variables here because they're defined in the code that includes this file as a template.
?>
<div class="akismet-box">
		<?php Akismet::view("setup", ["use_jetpack_connection" => true]); ?>
		<?php Akismet::view("setup-jetpack", ["akismet_user" => $akismet_user]); ?>
</div>

<div class="akismet-box">
	<?php Akismet::view("enter"); ?>
</div>
