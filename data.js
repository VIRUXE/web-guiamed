const basePath = 'D:/Downloads/med/';

const cardData = [
	{
		id: 'Informacoes',
		title: 'Informações',
		folders: [
			{
				id: 'DESCONTAMINAÇÃO',
				title: 'Descontaminação',
				images: [
					{title: 'Tooltip Test', name: 'Filtros Bomba Leite.JPG'},
					{title: 'Tooltip Test', name: 'Kit Fisiatria.JPG'},
					{title: 'Tooltip Test', name: 'Sonda Temperatura.JPG'}
				],
				folders: []
			}
		]
	},
	{
		id: 'MaterialAmbulatorio',
		title: 'Ambulatório',
		images: [
			{title: 'Tooltip Test', name: 'MICRO MOTOR.JPG'}
		],
		folders: [
			{
				id: 'ANESTESIA',
				title: 'Anestesia',
				images: [
					{title: 'Tooltip Test', name: 'Mascaras Faciais.JPG'},
					{title: 'Tooltip Test', name: 'Sonda Temperatura Amb..JPG'},
					{title: 'Tooltip Test', name: 'Tabuleiro Cateter Central Amb. (2 un).JPG'},
					{title: 'Tooltip Test', name: 'Tabuleiro Raqui.JPG'}
				]
			},
			{
				id: 'CIRURGIA GERAL',
				title: 'Cirurgia Geral',
				folders: [
					{
						id: 'CAIXA CIR. VASCULAR',
						title: 'Caixa Cir. Vascular',
						images: [
							{title: 'Tooltip Test', name: 'Cx Cirg. Vascular Amb..jpg'}
						]
					},
					{
						id: 'CAIXA LAPAROTOMIA',
						title: 'Caixa Laparotomia',
						images: [
							{title: 'Tooltip Test', name: 'Cx Laparotomia Amb..JPG'},
							{title: 'Tooltip Test', name: 'Cx nova Amb..JPG'},
							{title: 'Tooltip Test', name: 'Laparotomia Amb. 60 pçs.jpg'}
						]
					},
					{
						id: 'FININHO 7 CX',
						title: 'Fininho',
						images: [
							{title: 'Tooltip Test', name: 'CX. FININHO  37 Pç.JPG'}
						]
					},
					{
						id: 'LAPAROSCOPIA',
						title: 'Laparoscopia',
						images: [
							{title: 'Tooltip Test', name: 'TAB. LAPAROSCOPIA AMB..JPG'}
						]
					},
					{
						id: 'PARTES MOLES 8 CX',
						title: 'Partes Moles',
						images: [
							{title: 'Tooltip Test', name: 'Cx Partes Moles.JPG'}
						]
					},
					{
						id: 'PEQ. CIRURGIA 6 CX',
						title: 'Peq. Cirurgia',
						images: [
							{title: 'Tooltip Test', name: 'Cx Peq. Cirg..JPG'}
						]
					}
				]
			},
			{
				id: 'CIRURGIA_PLASTICA',
				title: 'Cirurgia Plástica',
				images: [
					{title: 'Tooltip Test', name: 'BASE METALICA 3 UNIDADES.JPG'},
					{title: 'Tooltip Test', name: 'DERMÁTOMO ANTIGO + LAMINAS.JPG'},
					{title: 'Tooltip Test', name: 'DERMÁTOMO ELÉCTRICO.JPG'},
					{title: 'Tooltip Test', name: 'EXPANSOR DE PELE.JPG'},
					{title: 'Tooltip Test', name: 'Kit Plastica Amb. (10pç).JPG'},
					{title: 'Tooltip Test', name: 'QUADRADO ALUMINIO.JPG'}
				]
			},
			{
				id: 'OFTALMOLOGIA',
				title: 'Oftalmologia',
				images: [
					{title: 'Tooltip Test', name: 'OFT.JPG'},
					{title: 'Tooltip Test', name: 'Peças Dr Gabriel.JPG'}
				],
				folders: [
					{
						id: 'CATARATA',
						title: 'Catarata',
						images: [
							{title: 'Tooltip Test', name: 'Catarata.JPG'},
							{title: 'Tooltip Test', name: 'Disposiçao na cx.JPG'}
						]
					},
					{
						id: 'CATARATA COMPLICADA',
						title: 'Catarata Complicada',
						images: [
							{title: 'Tooltip Test', name: 'Catarata complicada.JPG'}
						]
					},
					{
						id: 'Chalasio e pequena cir',
						title: 'Chalasio e Pequena Cir.',
						images: [
							{title: 'Tooltip Test', name: 'CNLS8140.JPG'},
							{title: 'Tooltip Test', name: 'Cx. Peq. Cirugia Oft..JPG'},
							{title: 'Tooltip Test', name: 'GWMO9213.JPG'},
							{title: 'Tooltip Test', name: 'OYVQ9357.JPG'},
							{title: 'Tooltip Test', name: 'VNPC2918.JPG'}
						]
					},
					{
						id: 'ENUCLEAÇÃO',
						title: 'Enucleação',
						images: [
							{title: 'Tooltip Test', name: 'Cx. Enucleaçao.JPG'}
						]
					},
					{
						id: 'GLAUCOMA',
						title: 'Glaucoma',
						images: [
							{title: 'Tooltip Test', name: 'glaucoma 3.JPG'},
							{title: 'Tooltip Test', name: 'Glaucoma verde.JPG'},
							{title: 'Tooltip Test', name: 'Glaucoma.JPG'}
						]
					},
					{
						id: 'PETERIGIO',
						title: 'Peterigio',
						images: [
							{title: 'Tooltip Test', name: 'Disposição do material na caixa.JPG'}
						],
						folders: [
							{
								id: 'Cx 1 a 4 peterígio',
								title: 'Caixa 1 a 4',
								images: [
									{title: 'Tooltip Test', name: '1 Cx Peterígeo Roxa.JPG'},
									{title: 'Tooltip Test', name: '2 Cx Peterígeo Laranja'},
									{title: 'Tooltip Test', name: '3 Cx Peterígeo verde preto'},
									{title: 'Tooltip Test', name: '4 Cx Peterígeo Rosa.JPG'}
								]
							}
						]
					},
					{
						id: 'VITRECTOMIA',
						title: 'Vitrectomia',
						images: [
							{title: 'Tooltip Test', name: 'Cabo vitrectomia com chave e agulhas.JPG'},
							{title: 'Tooltip Test', name: 'Cx Vitrectomia.JPG'}
						]
					}
				]
			},
			{
				id: 'ORL',
				title: 'ORL',
				images: [
					{title: 'Tooltip Test', name: 'MICRO MOTOR.JPG'},
					{title: 'Tooltip Test', name: 'MICRO MOTOR.JPG'},
					{title: 'Tooltip Test', name: 'MICRO MOTOR.JPG'},
					{title: 'Tooltip Test', name: 'MICRO MOTOR.JPG'}
				]
			},
			{
				id: 'ORTOPEDIA',
				title: 'Ortopedia',
				images: [
					{title: 'Tooltip Test', name: 'MICRO MOTOR.JPG'},
					{title: 'Tooltip Test', name: 'MICRO MOTOR.JPG'},
					{title: 'Tooltip Test', name: 'MICRO MOTOR.JPG'},
					{title: 'Tooltip Test', name: 'MICRO MOTOR.JPG'}
				]
			}
		]
	},
	{
		id: 'MaterialBlocoCentral',
		title: 'Bloco Central',
		images: [
			{title: 'Tooltip Test', name: 'MICRO MOTOR.JPG'}
		],
		folders: []
	},
	{
		id: 'MaterialExterno',
		title: 'Externo',
		images: [
			{title: 'Tooltip Test', name: 'MICRO MOTOR.JPG'}
		],
		folders: []
	},
	{
		id: 'MaterialServicos',
		title: 'Serviços',
		images: [
			{title: 'Tooltip Test', name: 'MICRO MOTOR.JPG'}
		],
		folders: []
	}
];