import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject, ViewChild, ElementRef } from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-selfie',
  templateUrl: './selfie.component.html',
  styleUrls: ['./selfie.component.scss']
})
export class SelfieComponent implements OnInit{

  @ViewChild('video', {static: true}) video: ElementRef<HTMLVideoElement> | any;
  @ViewChild('canvas') canvas: ElementRef | any;

  cameraActive: boolean = true;
  youLike: boolean = false;

  constructor(@Inject(PLATFORM_ID) private _platform: Object) { }

  ngOnInit(): void {
    this.onStart();
  }

  onStart(): void {
    if(isPlatformBrowser(this._platform) && 'mediaDevices' in navigator) {
      navigator.mediaDevices.getUserMedia({video: true}).then((ms: MediaStream) => {
        const _video = this.video.nativeElement;
        _video.srcObject = ms;
        _video.play();
      });
    }
  }

  onStop(): void {
    this.video.nativeElement.pause();
    (this.video.nativeElement.srcObject as MediaStream).getVideoTracks()[0].stop();
    this.video.nativeElement.srcObject = null;
  }

  takePhoto(): void {
    const _video = this.video.nativeElement;
    const _canvas = this.canvas.nativeElement;
    let context = _canvas.getContext('2d');
    context.drawImage(_video, 0, 32, 302, 70);
    this.youLike = true;
    this.cameraActive = false;
    this.onStop();
  }

  repeatPhoto(): void {
    this.youLike = false;
    this.cameraActive = true;
    this.onStart();
  }

  sendForm(){
    const _canvas = this.canvas.nativeElement;
    let dataURL = _canvas.toDataURL();
    console.log(dataURL);
  }

}
