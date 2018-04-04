<!doctype html>
<html>
<head>
<title>The Language of Geometry</title>
<link rel="stylesheet" type="text/css" href="styles.css"> 

<link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="favicon/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
<link rel="manifest" href="favicon/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="favicon/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">

<meta property="og:title" content="The Language of Geometry"/>
<meta property="og:image" content="facebook-header.png"/>
<meta property="og:site_name" content="Whitney Badge"/>
<meta property="og:description" content="Geometry is a language that is used to describe spacial relationships while letterforms are used to form words, which are used to share ideas. More specifically, the theory of sacred geometry is used to illustrate patterns that describe the physical nature of life down to the very particles that make up our existence. This form of geometry focuses on the idea of oneness that holds infinite possiblities."/>

</head>
<body>
    <div id="intro">
            <h1 class="title">Sacred Forms</h1>
            <p>To type, use your cursor to draw letterforms.</p>
            <p id="intro-info"> Geometry is a language that is used to describe spatial relationships while letterforms are used to form words to share ideas. More specifically, the theory of sacred geometry is used to illustrate patterns that describe the physical nature of life down to the very particles that make up our existence. This form of geometry focuses on the idea of oneness that holds infinite possiblities.<br><br>In the same way, languages offer endless opportunities for communication, allowing those who understand to share their ideas with the world. Sometimes we don't know the best way to articulate ourselves, but our words still have meaning however we choose to express them. Nothing is miniscule, not even the smallest particle in existence, so it's important to explore these systems in order to fully understand their power.</p>
    </div>

 <div class="flex-right">
 	<div id="drawing">
	    <canvas id="dots"></canvas>
	    <img src="metatron-template-small.png">
        <a href="#" id="save">+</a>
        <a href="#" id="clearLines">-</a>
    </div>
</div>

    <div id="explore">
	    <h1>Form Meaning</h1>
	    <p>Contribute and select letters to form words below.</p>
	</div>

    <div class="gallery">
        <?php
            $dir    = 'letters';
            $files = array_diff(scandir($dir,1), array('..', '.'));
            // echo count($files);
            for ($i = 0; $i < count($files); $i++){
                echo "<img class='letter' src='letters/".$files[$i]."'>";
            }
        ?>
    </div>

    <div class="flex-right row">
        
        <div class="column column-share">
            <div id="share">
                <h1>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=whitney.interaction.media/GeoCoding" target="_blank">Usage</a>
                </h1>
                <p>This typeface is available for download here.</p>
            </div>
        </div>

        <div class="column column-inputs">
            <div class="input-group">
                <div id="line"></div>
                <a href="#" id="deleteLetter">-</a>
            </div>
        </div>
    </div>
<!-- 
	<footer class="footer">
            <p class="copyright">&copy; 2017 Whitney Badge</p>
    </footer>  -->

    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="js/canvas2svg.js"></script> 
    <script type="text/javascript" src="js/connecting-dots.js"></script> 
</body>    
</html>
