import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CONTACT_ROUTE } from '../../routes';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  CONTACT_ROUTE = CONTACT_ROUTE;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
}
