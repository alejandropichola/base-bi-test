import {
  Component,
  OnInit,
  PLATFORM_ID,
  Inject,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { AppState } from '@/app/app.state';
import { UserInterface } from '@/app/interfaces/user';
import { UserServices } from '@/app/services/createUser';
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-selfie',
  templateUrl: './selfie.component.html',
  styleUrls: ['./selfie.component.scss'],
})
export class SelfieComponent implements OnInit {
  @ViewChild('video', { static: true }) video:
    | ElementRef<HTMLVideoElement>
    | any;
  @ViewChild('canvas') canvas: ElementRef | any;

  cameraActive: boolean = true;
  youLike: boolean = false;
  imageURL: string = '';
  user!: UserInterface;

  constructor(
    @Inject(PLATFORM_ID) private _platform: Object,
    private store: Store<AppState>,
    private http: UserServices,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.onStart();
    this.getUser();
  }

  onStart(): void {
    if (isPlatformBrowser(this._platform) && 'mediaDevices' in navigator) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((ms: MediaStream) => {
          const _video = this.video.nativeElement;
          _video.srcObject = ms;
          _video.play();
        });
    }
  }

  getUser(): void {
    this.store.subscribe((state) => {
      this.user = {...state.user};
    });
  }

  onStop(): void {
    this.video.nativeElement.pause();
    (this.video.nativeElement.srcObject as MediaStream)
      .getVideoTracks()[0]
      .stop();
    this.video.nativeElement.srcObject = null;
  }

  takePhoto(): void {
    const _video = this.video.nativeElement;
    const _canvas = this.canvas.nativeElement;
    let context = _canvas.getContext('2d');
    context.drawImage(_video, 0, 32, 302, 70);
    this.imageURL = _canvas.toDataURL('image/png',1.0);
    this.youLike = true;
    this.cameraActive = false;
    this.onStop();
  }

  repeatPhoto(): void {
    this.youLike = false;
    this.cameraActive = true;
    this.onStart();
  }

  sendForm() {
    this.user.photo = this.imageURL.split('base64,')[1];
    this.http.createUser(this.user).subscribe(response => {
      this.confirmAlert();
    }, error =>{
      this.errorAlert();
    });

  }

  confirmAlert(){
    Swal.fire({
      title: 'Enviado',
      icon: 'success',
      timer: 1500,
      showConfirmButton: false,
    });
    this.router.navigate(['validation']);
  }

  errorAlert(){
    Swal.fire({
      title: 'Error al enviar',
      icon: 'error',
      showConfirmButton: true
    });
  }

}
