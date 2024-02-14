import { Component, OnInit } from '@angular/core';
import { ReadMetaDataService } from '../../../services/read-meta-data.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  constructor(private readMetaDataService: ReadMetaDataService) {}

  async ngOnInit() {
    const metaData = await this.readMetaDataService.getMetaData(
      'https://now.westwing.com.br/jogo-de-prato-para-sobremesa-stoneware-terrakotta-43292.html?simple=DEQ22POR07364-56587&gad_source=1&gclid=EAIaIQobChMImMDHs6mrhAMV0hetBh3uAgzCEAQYBiABEgL6J_D_BwE'
    );
    console.log('metaData', metaData);
  }
}
