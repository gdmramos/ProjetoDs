$(document).ready(function () {
	// $.getJSON('../datasets/marcas.json', function (data) {

		// Simplificação de marcas e modelos só para testes Offline
		var marcas = [{"name": "AUDI", "fipe_name": "Audi", "order": 2, "key": "audi-6", "id": 6}, {"name": "BMW", "fipe_name": "BMW", "order": 2, "key": "bmw-7", "id": 7}, {"name": "CITROEN", "fipe_name": "Citro\u00ebn", "order": 2, "key": "citroen-13", "id": 13}];

		// Fazer real requisição dos modelos para api
		var modelo = [{
				"name": "Audi", 
				"model": ["TT", "R8", "A4"]
			},
			{
				"name": "BMW",
				"model": ["320i","X5","115i"]	
			},
			{
				"name": "Citro\u00ebn",
				"model": ["Xsara","C3","C4"]
			}];


		// Começo do código efetivamente;
		var options = '<option value="">Escolha uma marca</option>';	

		$.each(marcas, function (key, val) {
			options += '<option value="' + val.name + '">' + val.fipe_name + '</option>';
		});	

		$("#inputMarca").html(options);				

		$("#inputMarca").change(function () {				

			var options_modelo = '';
			var str = "";					

			$("#inputMarca option:selected").each(function () {
				str += $(this).text();
			});

			$.each(modelo, function (key, val) {
				if(val.name == str) {							
					$.each(val.model, function (key_model, val_model) {
						options_modelo += '<option value="' + val_model + '">' + val_model + '</option>';
					});							
				}
			});

			$("#inputModelo").html(options_modelo);

		}).change();		

	// });	

});