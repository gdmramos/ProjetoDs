$(document).ready(function () {
	$.get('../datasets/estados_cidades.json', function (data) {
		
		var items = [];
		var options = '<option value="">Escolha um estado</option>';	

		$.each(data, function (key, val) {
			options += '<option value="' + val.sigla + '">' + val.sigla + '</option>';
		});					
		$("#inputEstado").html(options);				
		
		$("#inputEstado").change(function () {				

			var options_cidades = '';
			var str = "";					s
			
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