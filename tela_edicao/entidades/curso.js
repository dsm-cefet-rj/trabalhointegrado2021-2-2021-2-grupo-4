class Curso {
    constructor() {    
        this.Id;
        this.Nome;        
    
        const HorasComplementares = {
                'ConscientizaçãoHCouAmbiental': 20,
                'Ensino': [TiposAtividade.Monitoria,
                        TiposAtividade.MateriasNaoPrevistas],                    
                'Extensão': [TiposAtividade.EventosInstitucionais,
                            TiposAtividade.SeminariosConferenciasPalestrasVisitasTecnicas,
                            TiposAtividade.ProjetosDeExtensão,
                            TiposAtividade.BancasTCC,
                            TiposAtividade.CursoLinguaEstrangeira,
                            TiposAtividade.CursoAtualizaçãoCertificaçãoQualificação,
                            TiposAtividade.AssistenciaConsultoriaTecnica],
                'Pesquisa':[TiposAtividade.IniciaçãoCientífica, 
                            TiposAtividade.Publicações, 
                            TiposAtividade.ProjetosDePesquisa, 
                            TiposAtividade.AssistênciaMonografiasTesesDissertções
                            ]
        }
        const TiposAtividade = {
                'IniciaçãoCientífica': 120,
                'Publicações': 120,
                'ProjetosDePesquisa': 100,
                'AssistênciaMonografiasTesesDissertções': 40,
                'EventosInstitucionais': 80,
                'SeminariosConferenciasPalestrasVisitasTecnicas': 60,
                'ProjetosDeExtensão': 100,
                'BancasTCC': 20,
                'CursoAtualizaçãoCertificaçãoQualificação': 100,
                'CursoLinguaEstrangeira': 60,
                'AssistenciaConsultoriaTecnica': 100,
                'Monitoria': 100,
                'MateriasNaoPrevistas': 120
        }
    }
}
