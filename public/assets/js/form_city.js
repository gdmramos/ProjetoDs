$(document).ready(function () {
	$.getJSON('https://gist.githubusercontent.com/ografael/2037135/raw/5d31e7baaddd0d599b64c3ec04827fc244333447/estados_cidades.json', function (data) {
		
		var items = [];
		var options = '<option value="">Escolha um estado</option>';	

		$.each(data, function (key, val) {
			options += '<option value="' + val.sigla + '">' + val.sigla + '</option>';
		});					
		$("#inputEstado").html(options);				
		
		$("#inputEstado").change(function () {				

			var options_cidades = '';
			var str = "";					
			
			$("#inputEstado option:selected").each(function () {
				str += $(this).text();
			});
			
			$.each(data, function (key, val) {
				if(val.sigla == str) {							
					$.each(val.cidades, function (key_city, val_city) {
						options_cidades += '<option value="' + val_city + '">' + val_city + '</option>';
					});							
				}
			});

			$("#inputCidade").html(options_cidades);
			
		}).change();		

	});

});